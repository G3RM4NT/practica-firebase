// CardPerfil.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CardPerfil = ({ id, nombre, correo, contrasena, titulo, anioGraduacion, onEdit }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onEdit(id)}>
            <Text style={styles.titulo}>{nombre}</Text>
            <Text style={styles.text}> {correo}</Text>
            <Text style={styles.text}> {contrasena}</Text>
            <Text style={styles.text}> {titulo}</Text>
            <Text style={styles.text}>Año de Graduación: {anioGraduacion}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        elevation: 3,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default CardPerfil;
