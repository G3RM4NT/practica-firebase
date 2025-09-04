import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { database } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const EditarPerfil = ({ route, navigation }) => {
    const { perfil } = route.params;

    const [form, setForm] = useState({
        nombre: perfil.nombre,
        correo: perfil.correo,
        contrasena: perfil.contrasena,
        titulo: perfil.titulo,
        anioGraduacion: perfil.anioGraduacion,
    });

    const handleUpdate = async () => {
        try {
            const ref = doc(database, 'usuarios', perfil.id);
            await updateDoc(ref, form);

            Alert.alert('Perfil actualizado', 'Cambios guardados', [
                { text: 'OK', onPress: () => navigation.goBack() },
            ]);
        } catch (error) {
            console.error('Error actualizando perfil', error);
            Alert.alert('Error', 'No se pudo actualizar el perfil.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Perfil</Text>

            {Object.entries(form).map(([key, value]) => (
                <View key={key} style={styles.inputContainer}>
                    <Text style={styles.label}>{key}:</Text>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={(text) => setForm({ ...form, [key]: text })}
                    />
                </View>
            ))}

            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Guardar Cambios</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditarPerfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#0288d1',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
