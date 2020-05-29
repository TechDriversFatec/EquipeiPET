import React, { useState, useEffect } from 'react';
import { 
StyleSheet,
Text,
TextInputasNativeTextInput,
ScrollView,
View,
Image,
TouchableHighlight, 
AsyncStorage
} from 'react-native';
 
import { TextInput } from 'react-native-paper';

import api from '../../services/api';
 
export default function First({navigation}) {

    const [ user, setUser ] = useState()
    const [ name, setName ] = useState()
    const [ type, setType ] = useState()
    const [ color, setColor ] = useState()
    const [ age, setAge ] = useState()
    const [ born, setBorn ] = useState()
    const [ breed, setBreed ] = useState()
    const [ castrationDate, setCastrationDate ] = useState()

    useEffect(() => {
        async function getUser() {
            const id = await AsyncStorage.getItem('@ipet:userId')

 
                const response = await api.get(`/user/${id}`)
                setUser(response.data.name)

        }
        getUser()
    }, [])

    async function handlePet () {
        const id = await AsyncStorage.getItem('@ipet:userId')
        try {
            const response = await api.post('/pet/create',{
                name,
                type,
                color,
                age, 
                born,
                breed,
                castrationDate,
                owner: user,
                ownerId: id     
            })
            navigation.push('Home')
        } catch (error) {
        console.log(error)    
        }
    }
return(
    <View style={styles.container}>
        
        <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
        label="Nome do Pet"
        mode="outlined"
        onChangeText={(value) => setName(value)}
        />

        <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
        label="Tipo (Cão ou Gato)"
        mode="outlined"
        onChangeText={(value) => setType(value)}
        />

        <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
        label="Cor do Pet"
        mode="outlined"
        onChangeText={(value) => setColor(value)}
        />
        
        <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
        label="Idade"
        mode="outlined"
        onChangeText={(value) => setAge(value)}
        />
        
        <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
        label="Data de Nascimento"
        mode="outlined"
        onChangeText={(value) => setBorn(value)}
        />
        
        <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
        label="Raça"
        mode="outlined" 
        onChangeText={(value) => setBreed(value)}   
        />
        
        <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
        label="Data de Castração"
        mode="outlined"
        onChangeText={(value) => setCastrationDate(value)}
        />
        
        <TouchableHighlight style={[ styles.btnCadastrarPet ]}
        onPress={() => handlePet()}>
        <Text style={{ color:"#FFFFFF" }}> Cadastrar meu Pet </Text>
        </TouchableHighlight>

    </View>

    );
    }
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8D99AE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    btnCadastrarPet: {
    width:"90%",
    height:47,
    backgroundColor:"#EF233C",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#2B2D42",
    borderRadius:7,
    marginTop:10
    }
    }
 
);

