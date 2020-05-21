import { TextInput } from 'react-native-paper';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import logo from '../../../assets/logo.png'

export default function Registro({navigation}) {
    return (
    <View style={ styles.container } >

        <Image source={logo} style= { styles.logo } />

        <TextInput 
        label = 'Nome'
        mode = 'outlined'
        style ={ styles.input }
        />

        <TextInput 
        label = 'E-mail'
        mode = 'outlined'
        style ={ styles.input }
        />

        <TextInput secureTextEntry={true} 
        label = 'Senha'
        mode = 'outlined'
        style ={ styles.input }
        />

        <TouchableHighlight style={[ styles.btnGeneral, styles.btnRegistro ]}>
            <Text style={{ color: "#FFFFFF" }}> Registrar </Text>
        </TouchableHighlight>
    
        <Text style={ styles.text } onPress={() => navigation.push('Login')}>
            Já possui uma conta? Clique aqui!
        </Text>
    
    </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8D99AE',
        alignItems: 'center',
        justifyContent: 'center',
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
    
    btnRegistro: {
        backgroundColor: "#EF233C",
        marginTop: 50
    },
    
    logo: {
        width: 150,
        height: 150,
        marginTop: 30,
        marginBottom: 30
    },

    input: {
        marginTop: 17,
        textAlignVertical: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        height: 47,
        width: "90%"

    },

    text: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: 50
    }

});