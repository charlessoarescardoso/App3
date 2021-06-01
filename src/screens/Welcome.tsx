import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    SafeAreaView, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
} from 'react-native';

import startImg from '../assets/fornec.png';


export function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('City')

    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Seja bem Vindo!
            </Text>
            <Image 
                style={styles.image}
                source={startImg}
            />
            <Text style={styles.subtitle}>
                Fique tranquilo, {'\n'}que vamos resolver o seu problema!
            </Text>
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.4}
                onPress={handleStart}
            >
                <Text style={styles.textButton}>
                    Avançar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EFF2FB',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        color: '#0000ff',

    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 50,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 15,
        color: '#52665A',
    },

    button: {
        marginBottom: 40,
        backgroundColor: '#5858FA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 52,
        width: 90,
        
    },
    textButton: {
        fontSize: 18,
        color: '#fff'
    },
});