import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
 
//import photo from '../../../assets/photo.png'

import api from '../../services/api';
 
export default function Index({ navigation }) {

  const { petId } = navigation.state.params;

  
  const [ name, setName ] = useState()
  const [ type, setType ] = useState()
  const [ color, setColor ] = useState()
  const [ age, setAge ] = useState()
  const [ breed, setBreed ] = useState()


  useEffect(() => {
    async function getPet () {
        
        const response = await api.get(`/pet/show/${petId}`)

        setName(response.data.name)
        setType(response.data.type)
        setColor(response.data.color)
        setAge(response.data.age)
        setBreed(response.data.breed)

        
    }

    getPet()

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
 
          
 
        <Text>Nome: { name }</Text>
        <Text>Tipo: { type }</Text>
        <Text>Cor: { color }</Text>
        <Text>Idade: { age }</Text>
        <Text>Raça: { breed }</Text>
   
        </View>
      </View>
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
 
  container2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: "95%",
    maxHeight: "95%",
    borderRadius: "15px"
  },
 
  container3: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    maxHeight: "50%",
    marginBottom: 150
  },
 
  photo: {
    width: 155,
    height: 155,
    borderRadius: "30px",
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#2B2D42",
    backgroundColor: "#FFFFFF"
  },
 
});