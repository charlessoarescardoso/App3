import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface ButtonProviderProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function ButtonProvider({
    title,
    active = false,
    ...rest
}: ButtonProviderProps){
    return(
        <RectButton
            style={[
                styles.container,
                active && styles.ButtonActive
            ]}
            {...rest}
        >
            <Text style={[
                styles.text,
                active && styles.TextActive
            ]}>
                {title}
            </Text>

        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6e6',
        width: 85,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 8,
        
    },
    ButtonActive: {
        backgroundColor: '#0040ff',
    },
    text:{
        color: '#52665A',
    },
    TextActive: {
        color: '#ffffff',
        fontWeight: 'bold',
        
    },
});