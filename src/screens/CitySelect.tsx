import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
    SafeAreaView, 
    TextInput, 
    FlatList, 
    TouchableOpacity, 
    Text,
    StyleSheet,
    Alert,
    
} from 'react-native';
import api from '../services/api';


const lista = [
    {id:'1', title:'Espinosa - MG'},
    {id:'2', title:'Itacarambi - MG'},
    {id:'3', title:'Jaiba - MG'},
    {id:'4', title:'Janaúba - MG'},
    {id:'5', title:'Januária'},
    {id:'6', title:'Manga'},
    {id:'7', title:'Matias cardoso'},
    {id:'8', title:'Mato verde'},
    {id:'9', title:'Monte azul'},
    {id:'10', title:'Montes claros'},
    {id:'11', title:'Porteirinha'},
    {id:'12', title:'Verdelandia'},
    
];

interface ListCityProps{
    key: string;
    title: string;
}

export function CitySelect(){
    const [city, setCitySelect] = useState(lista);
    const [cityname, setCityName] = useState<ListCityProps[]>([]);

    const navigation = useNavigation();
    
    function handleserch(c){
        const filteredCities = lista.filter((dados) => 
        dados.title.includes(c));
        
        setCitySelect(filteredCities);
        
    }
    useEffect(() => {
        async function fechListCity() {
            const { data } = await api.get('city');
           setCityName(data);
        }
        fechListCity();
    }, [])

    function handleProvider(){
        if(!city)
            return Alert.alert('Você precisar definir uma localização! 🎯');

        navigation.navigate('Provider')
         
    }
    
    return(
        <SafeAreaView style={sytles.container}>
            <TextInput
                style={sytles.input} 
                placeholder="🔎   Digite a Cidade mais proxima"
                placeholderTextColor='#fff'
                onChangeText={(c) => handleserch(c)}
                autoFocus={true}
            />          
            
                <FlatList
                    style={sytles.list} 
                    data={city}
                    renderItem={({ item }) => 
                    <Text style={sytles.textList}>
                        {item.title}
                    </Text>
                }                                
                />            
            <TouchableOpacity 
                onPress={handleProvider}
                style={sytles.button}
            >
                <Text style={sytles.buttonTitle}>
                    Confirmar
                    
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF2FB',
        justifyContent: 'center',
        
    },
    input: {
        marginTop: 40,
        borderRadius: 8,
        backgroundColor: '#2E2EFE',
        height: 60,
        width: '80%',
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 18,
        paddingLeft: 8,
        color: '#ffffff'       
        
    },
    button: {
        marginBottom: 20,
        backgroundColor: '#2E2EFE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 48,
        width: '99%',
        marginHorizontal: 2,
        
        
    },
    buttonTitle:{
        fontSize: 22,
        color: '#fff'
    },
    textList: {
        fontSize: 20,
        padding: 5,
        paddingLeft: 40,
        
    },
    list: {
        width: '100%',
        
    },
    scroll: {
        width: 300,
        maxHeight: 300,
        
        marginBottom: 80,
        
    },
    separetor:{},
});