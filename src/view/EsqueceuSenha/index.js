import React, { useState } from 'react';
import {StyleSheet, TouchableHighlight, View, Image, Text, AsyncStorage} from 'react-native'
import { TextInput, BottomNavigation } from 'react-native-paper';
import logo from '../../../assets/logo.png'



<View style={ styles.container} >
  <Image source={logo} style={ styles.logo }>
     </Image>

  <Text style={ styles.texto }>
    Após informar seu E-mail, enviaremos uma mensagem com a instrução de como recuperar sua senha. 
    </Text>

  <TextInput 
  label = 'E-mail'
  mode = 'outlined'
  style ={ styles.input }
  />

  <TouchableHighlight style={ btnGeneral }> 
    <Text style={ styles.text }> Enviar e-mail </Text>
  </TouchableHighlight>

</View>


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#8D99AE',
    alignItems: 'center',
    justifyContent: 'center',
    },

  logo: {
      width: 150,
      height: 150,
      marginTop: 50
    },

  text: {
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: 16,
      marginTop: 50
    },

  input: {
      marginTop: 17,
      textAlignVertical: 'center',
      color: '#FFFFFF',
      fontSize: 16,
      height: 47,
      width: "90%"
    },

  btnGeneral: {
      width: "90%",
      height: 47,
      borderWidth: 1,
      borderColor: "#2B2D42",
      borderRadius: 7,
      justifyContent: "center",
      alignItems: "center"
    },

})