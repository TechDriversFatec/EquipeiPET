import React, { useState, useEffect } from 'react';
import { 
StyleSheet,
Text,
TextInputasNativeTextInput,
ScrollView,
View,
Image,
TouchableHighlight, 
Button,
AsyncStorage
} from 'react-native';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
 
import { TextInput } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'

import api from '../../services/api';
 
export default function First({navigation}) {

    const { animal } = navigation.state.params

    const [ user, setUser ] = useState()
    const [ name, setName ] = useState()
    const [ type, setType ] = useState()
    const [ color, setColor ] = useState()
    const [ age, setAge ] = useState()
    const [ born, setBorn ] = useState()
    const [ breed, setBreed ] = useState()
    const [ castrationDate, setCastrationDate ] = useState()

    const [ file, setImage ] = useState()
    const [ teste, setTeste ] = useState(false)
    

    useEffect(() => {
        async function getUser() {
            const id = await AsyncStorage.getItem('@ipet:userId')

 
                const response = await api.get(`/user/${id}`)
                setUser(response.data.name)

        }
        getUser()
    }, [])

    async function imagePickerCall() {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
          if (status !== "granted") {
            alert("Nós precisamos dessa permissão.");
            return;
          }
        }
        

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All
        });

        console.log(result)
      
        if (result.cancelled) {
            return;
        }
      
        if (!result.uri) {
            return;
        }
      
        setImage(result);
    }
    

    const optionsDog = [
        {
            'id': 1,
            'doenca': 'Cão'
        },
        {
            'id': 2,
            'doenca': 'Cão'
        }
    ]

    const optionsCat = [
        {
            'id': 1,
            'doenca': 'Gato'
        },
        {
            'id': 2,
            'doenca': 'Gato'
        }
    ]



    async function handlePet () {
        const id = await AsyncStorage.getItem('@ipet:userId')
        try {
            const response = await api.post('/pet/create',{
                name,
                type: animal,
                color,
                age, 
                born,
                breed,
                castrationDate,
                owner: user,
                ownerId: id     
            })
            if(!file) navigation.push('Home')
            else sendFile(response.data._id)
        } catch (error) {
        console.log(error)    
        }
    }

    async function sendFile(id) {
        //const filename = file.split('/').pop();
        const path = file.uri.split('/');
        const fileName = path[path.length - 1];

        const data = new FormData();
        data.append('file',  { 
            uri: file.uri,
            name: fileName,
            type: file.type
         } )

        try {
            const response = await api.put(`/pet/upload/${id}`, data)

            navigation.push('Home')
        } catch (error) {
            console.log(error)
        }
        
    }


return(
    <ScrollView style={styles.container}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Abrir galeria" onPress={imagePickerCall} />
            {
                file && <Image source={{ uri: file.uri }} style={{ width: 130, height: 130, marginTop: 5 }} />
            }
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Nome do Pet"
            mode="outlined"
            onChangeText={(value) => setName(value)}
            />

            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Tipo (Cão ou Gato)"
            mode="outlined"
            value={animal}
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
            {
                animal == 'Cão' ?
                optionsDog.map(option => (
                    <CheckBox
                    key={option.id}
                    title={option.doenca}
                    />
                ))

                :
                animal == 'Gato' ?
                optionsCat.map(option => (
                    <CheckBox
                    key={option.id}
                    title={option.doenca}
                    />
                ))

                : null
                
            }

            
            <TouchableHighlight style={[ styles.btnCadastrarPet ]}
            onPress={() => handlePet()}>
            <Text style={{ color:"#FFFFFF" }}> Cadastrar meu Pet </Text>
            </TouchableHighlight>
        </View>
    </ScrollView>

    );
    }
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8D99AE',
        paddingTop: 20
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
    marginTop:10,
    marginBottom: 30
    }
    }
 
);

