import React from 'react';
import {StyleSheet, TouchableHighlight, View, Image, Text} from 'react-native'
import { TextInput } from 'react-native-paper';
import logo from '../../../assets/logo.png'

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={logo} style={ styles.logo } />

            <TextInput style={styles.email}
            label="E-mail"
            mode="outlined" >
            </TextInput>
            

            <TextInput style={styles.senha}
            label="Senha"
            mode="outlined" 
            secureTextEntry={true} >
            </TextInput>

            <TouchableHighlight style={[ styles.btnGeneral, styles.btnEntrar ]}
            onPress={() => navigation.push('Home')}>
                <Text style={{ color: "#FFFFFF", fontSize: 18 }}> Entrar </Text>
            </TouchableHighlight>

            <Text style={ styles.textlink }
            onPress={() => navigation.push('Registro')} >
             Registrar
            </Text>

            <Text style={ styles.textlink }
            onPress={() => navigation.push('Login')}>
             Esqueceu sua senha?
            </Text>

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
  
    logo: {
      width: 150,
      height: 150,
      marginTop: 50
    },
  
    email: {
        width: "90%",
        height: 47,
        marginTop: 30,
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: 18,
    },

    senha: {
        width: "90%",
        height: 47,
        marginTop: 10,
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: 18,
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
  
    btnEntrar: {
        marginTop: 50,
        backgroundColor: "#EF233C",
        marginBottom: 10,
    },
  
    textlink: {
        marginTop: 8,
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        
    },
  
  });
