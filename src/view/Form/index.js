import React from 'react';
import { 
StyleSheet,
Text,
TextInputasNativeTextInput,
ScrollView,
View,
Image,
TouchableHighlight
} from 'react-native';
 
import { TextInput } from 'react-native-paper';
 
export default function First() {
    return (
    <ScrollView>
    <View style={styles.container}>
    
    <TextInput style={{ backgroundColor:'#8D99AE' }}
    label="Nome do Pet"
    mode="outlined"
    value="This is a short text"

    />
    <TextInput style={{ backgroundColor:'#8D99AE' }}
    label="Cor do Pet"
    mode="outlined"
    value="This is a short text"
    />
    
    <TextInput style={{ backgroundColor:'#8D99AE' }}
    label="Idade"
    mode="outlined"
    value="This is a short text"
    />
    
    <TextInput style={{ backgroundColor:'#8D99AE' }}
    label="Data de Nascimento"
    mode="outlined"
    value="This is a short text"
    />
    
    <TextInput style={{ backgroundColor:'#8D99AE' }}
    label="Raça"
    mode="outlined"
    value="This is a short text"
    />
    
    <TextInput style={{ backgroundColor:'#8D99AE' }}
    label="Data de Castração"
    mode="outlined"
    value="This is a short text"
    />
    
    <TouchableHighlight style={[ styles.btnCadastrarPet ]}>
    <Text style={{ color:"#FFFFFF" }}> Cadastrar meu Pet </Text>
    </TouchableHighlight>

    </View>
    </ScrollView>
    );
    }
    
    const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor:'#8D99AE',
    alignItems:'center',
    justifyContent:'center',
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

