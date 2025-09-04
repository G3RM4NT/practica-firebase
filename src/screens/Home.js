// HomePerfil.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { database } from '../config/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import CardPerfil from '../components/CardProductos'; // Usa la card de perfil

const HomePerfil = ({ navigation }) => {
    const [perfiles, setPerfiles] = useState([]);

    useEffect(() => {
        const q = query(collection(database, 'usuarios'), orderBy('creado', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setPerfiles(docs);
        });

        return () => unsubscribe();
    }, []);

    const goToAdd = () => {
        navigation.navigate('Add');
    };

    const goToEdit = (id) => {
        const perfil = perfiles.find((p) => p.id === id);
        navigation.navigate('EditarPerfil', { perfil });
    };

    const renderItem = ({ item }) => (
        <CardPerfil
            id={item.id}
            nombre={item.nombre}
            correo={item.correo}
            contrasena={item.contrasena}
            titulo={item.titulo}
            anioGraduacion={item.anioGraduacion}
            onEdit={goToEdit}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>

            {perfiles.length !== 0 ? (
                <FlatList
                    data={perfiles}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                />
            ) : (
                <Text style={styles.subtitle}>No hay datos</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={goToAdd}>
                <Text style={styles.buttonText}>Agregar Perfil</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomePerfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ff9800',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#0288d1',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        flexGrow: 1,
    },
});
