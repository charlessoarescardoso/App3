import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface ProvidersProps extends RectButtonProps {
    data: {
        name: string;
        
    }
}

export const ProviderCardPrimary = ({data, ...rest}: ProvidersProps) => {
    return(
        <RectButton style={styles.container}{...rest}>
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10,

    },
    text: {
        marginVertical: 16,
    },
});