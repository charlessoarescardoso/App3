import React, { useEffect, useState } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    FlatList,
    SafeAreaView
} from 'react-native';

import userImg from '../assets/handshake.png'
import { ButtonProvider } from '../components/ButtonProvider';
import api from '../services/api';
import { Load } from '../components/Load';
import { ProviderCardPrimary } from '../components/ProviderCardPrimary';

interface ProviderProps {
    key: string;
    title: string;
}
interface FornecedorProps {    
    id: string;
    name: string;
    adress: string;
    phone: string;
    providers: string;
    city: string;
}
export function Provider(){
    const [cityprovider, setCityProvider] = useState<ProviderProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [prestador, setPrestador] = useState<FornecedorProps[]>([]);

    useEffect(() => {
        async function fetchFornecedor() {
            const { data } = await api.get('company');
            setPrestador(data);
        }
        fetchFornecedor();
    }, []);

    useEffect(() =>{
        async function fetchProvider() {
            const { data } = await api.get('providers');
            setCityProvider(data);
            setLoading(false);
        }
        fetchProvider();
    }, [])

    if(loading)
    return <Load />

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Cidade selecionada</Text>
                    <Text style={styles.userCity}>Montes claros</Text>                
                </View>
                <Image
                    style={styles.image} 
                    source={userImg}
                />            
            </View>
            <Text style={styles.provider}>
                Selecione o prestador desejado!
            </Text>
            <View>
                <FlatList
                    data={cityprovider}
                    renderItem={({ item }) => (
                        <ButtonProvider 
                            title={item.title}                            
                        />
                    )} 
                    horizontal
                    contentContainerStyle={styles.listProvider}
                />
            </View>
            <View style={styles.fornecedor}>
                 <FlatList 
                    data={prestador}
                    renderItem={({ item }) =>(
                        <ProviderCardPrimary data={item}/>
                    )}
                 />       
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
    },
    greeting: {
        fontSize: 20,
        color:'#52665A',
        marginTop: 30,
    },
    userCity: {
        fontSize: 25,
        marginTop: 8,
        backgroundColor: '#eeeeee',
        borderRadius: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2E2EFE',
        
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        paddingRight: 30,
        
    },
    provider: {
        color: '#52665A',
        fontSize: 17,
        textAlign: 'center',
    },
    listProvider: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 20,
        marginTop: 10,
    },
    fornecedor: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
    },

});