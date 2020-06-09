import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>

      <Text style={{fontSize:20, marginBottom:15}}>Adicionar uma Vacina:</Text> 

      <TextInput style={styles.Input}
      label="Nome do Vermífugo"
      mode="outlined"
      ></TextInput>

      <TextInput style={styles.Input}
      label="Data do Vermífugo"
      mode="outlined"
      ></TextInput>

      <TextInput style={styles.Input}
      label="Data para Vermifugar"
      mode="outlined"
      ></TextInput>

      <TouchableHighlight style={[styles.btnGeneral]}>
        <Text style={{color: "#FFFFFF", fontSize:17}}> Salvar Dados </Text>
      </TouchableHighlight>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D99AE',
    alignItems: 'center',
    justifyContent: 'center'
  },

  container2: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    maxHeight: "60%",
    borderRadius: 15,
    marginBottom: 150
  },


  btnGeneral: {
    width: "80%",
    height: 47,
    borderWidth: 1,
    borderColor: "#2B2D42",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EF233C",
    marginTop: 40
  },

  Input: {
   width: "90%",
   height: 47,
   marginTop: 10,
   backgroundColor: "#ffffff",
   borderRadius: 7,
   justifyContent: "flex-start",
   alignItems: "flex-start",
   marginBottom: 10
  },

});