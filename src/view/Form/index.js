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
import { Left } from 'native-base';
 
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
    const [ checked, setChecked ] = useState(false)
    

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
            'doenca': 'Raiva Canina'
        },
        {
            'id': 2,
            'doenca': 'Cinomose'
        },
        {
            'id': 3,
            'doenca': 'Doença Periodental'
        },
        {
            'id': 4,
            'doenca': 'Parvovirose'
        },
        {
            'id': 5,
            'doenca': 'Câncer'
        },
        {
            'id': 6,
            'doenca': 'Leptospirose'
        },
        {
            'id': 7,
            'doenca': 'Hepatite Infecciosa Canina'
        },
        {
            'id': 8,
            'doenca': 'Sarna'
        },
        {
            'id': 9,
            'doenca': 'Taxoplasmose'
        },
        {
            'id': 10,
            'doenca': 'Coronavírus'
        },
        {
            'id': 11,
            'doenca': 'Hepatite'
        },
        {
            'id': 12,
            'doenca': 'Parvovírus'
        },
        {
            'id': 13,
            'doenca': 'Displasia de Quadril'
        },
        {
            'id': 14,
            'doenca': 'Reumatismo'
        },
        {
            'id': 15,
            'doenca': 'Epilepsia'
        },
        {
            'id': 16,
            'doenca': 'Periodontite'
        },
        {
            'id': 17,
            'doenca': 'Piometra'
        },
        {
            'id': 18,
            'doenca': 'Torção Gástrica'
        },
        {
            'id': 19,
            'doenca': 'Alergias Cutâneas'
        },
        {
            'id': 20,
            'doenca': 'Diabetes'
        },
        {
            'id': 21,
            'doenca': 'Criptorquidia'
        },
        {
            'id': 22,
            'doenca': 'Otite'
        }
    ]

    const optionsCat = [
        {
            'id': 1,
            'doenca': 'Clamidiose'
        },
        {
            'id': 2,
            'doenca': 'Raiva Felina'
        },
        {
            'id': 3,
            'doenca': 'Insuficiência Renal Crônica'
        },
        {
            'id': 4,
            'doenca': 'Peritonite Infecciosa Felina'
        },
        {
            'id': 5,
            'doenca': 'Vírus da Imunodeficiência Felina'
        },
        {
            'id': 6,
            'doenca': 'Rinotraqueíte Viral - Gripe de gato'
        },
        {
            'id': 7,
            'doenca': 'Leucemia Felina'
        },
        {
            'id': 8,
            'doenca': 'Panleucopenia Felina'
        },
        {
            'id': 9,
            'doenca': 'Rinotraqueite Felina'
        },
        {
            'id': 10,
            'doenca': 'Calicivirose'
        },
        {
            'id': 11,
            'doenca': 'Pneumonite'
        },
        {
            'id': 12,
            'doenca': 'Alergia'
        },
        {
            'id': 13,
            'doenca': 'Conjutivite'
        },
        {
            'id': 14,
            'doenca': 'Doença Periodenta'
        },
        {
            'id': 15,
            'doenca': 'Otite'
        },
        {
            'id': 16,
            'doenca': 'Obesidade e Peso Excessivo'
        },
        {
            'id': 17,
            'doenca': 'Gripe Felina'
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
        const type = file.type
        const uri = file.uri

        const data = new FormData();
        data.append("file", file, fileName)

        console.log(JSON.stringify(data), 'name: ', name)
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

            
            <Text style={{fontSize:16, marginTop:10}}>Patologias:</Text>
                
            <TouchableHighlight style={[styles.button2]}>
                <Text style={{color:"#FFF"}}>?</Text>
            </TouchableHighlight>
        
        
            <View style={[styles.container2]}>
            {
                animal == 'Cão' ?
                optionsDog.map(option => (
                    <CheckBox 
                    key={option.id}
                    title={option.doenca}
                    checkedColor={"#8D99AE"}
                    uncheckedColor={"#8D99AE"}
                    backgroundColor={"#8D99AE"}
                    color={"#8D99AE"}
                    iconColor={"#8D99AE"}
                    checked={() => setChecked(true) }
                    />
                ))

                :
                animal == 'Gato' ?
                optionsCat.map(option => (
                    <CheckBox
                    key={option.id}
                    title={option.doenca}
                    checkedColor={"#8D99AE"}
                    uncheckedColor={"#8D99AE"}
                    backgroundColor={"#8D99AE"}
                    />
                ))

                : null
                
            }
            </View>
        
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
            marginTop:20,
            marginBottom: 30
        },

        container2: {
            flex: 1,
            backgroundColor: '#FFF',
            width:"70%",
            marginTop:10,
            borderRadius:5
        },

        button2: {
            backgroundColor: "#2B2D42",
            width:20,
            borderRadius:50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
 
);

