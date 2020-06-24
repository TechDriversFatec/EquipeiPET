import React, { useState, useEffect } from 'react';
import { 
StyleSheet,
Text,
ScrollView,
View,
TouchableHighlight,
AsyncStorage
} from 'react-native';
import api from '../../services/api';
import { TextInput } from 'react-native-paper';

export default function EditPet({ navigation }) {

    const { petId } = navigation.state.params

    const [ user, setUser ] = useState()
    const [ name, setName ] = useState()
    const [ type, setType ] = useState()
    const [ color, setColor ] = useState()
    const [ age, setAge ] = useState()
    const [ born, setBorn ] = useState()
    const [ breed, setBreed ] = useState()
    const [ castrationDate, setCastrationDate ] = useState()

    useEffect(() => {
        async function getPet () {
          const response = await api.get(`/pet/show/${petId}`)
    
          setName(response.data.name)
          setType(response.data.type)
          setColor(response.data.color)
          setAge(response.data.age)
          setBorn(response.data.born)
          setBreed(response.data.breed)
          setCastrationDate(response.data.castrationDate)
      
        }
    
        getPet()
    
      }, [])

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
            const response = await api.put(`/pet/update/${petId}`, {
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

  return (
    <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Nome do Pet"
            mode="outlined"
            value={name}
            onChangeText={(value) => setName(value)}
            />

            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Tipo (Cão ou Gato)"
            mode="outlined"
            value={type}
            onChangeText={(value) => setType(value)}
            />

            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Cor do Pet"
            mode="outlined"
            value={color}
            onChangeText={(value) => setColor(value)}
            />
            
            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Idade"
            mode="outlined"
            value={age}
            onChangeText={(value) => setAge(value)}
            />
            
            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Data de Nascimento"
            mode="outlined"
            value={born}
            onChangeText={(value) => setBorn(value)}
            />
            
            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Raça"
            mode="outlined" 
            value={breed}
            onChangeText={(value) => setBreed(value)}
            />
            
            <TextInput style={{ backgroundColor:'#8D99AE', borderColor: '#FFFFFF', width: '90%' }}
            label="Data de Castração"
            mode="outlined"
            value={castrationDate}
            onChangeText={(value) => setCastrationDate(value)}
            />
            
            <TouchableHighlight style={[ styles.btnCadastrarPet ]}
            onPress={() => handlePet()}>
            <Text style={{ color:"#FFFFFF" }}> Atualizar Dados iPet </Text>
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