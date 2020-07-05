import React, { useState, useEffect } from 'react';
import { 
StyleSheet,
Text,
ActivityIndicator,
ScrollView,
View,
Image,
TouchableHighlight, 
Button,
AsyncStorage,
} from 'react-native';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
 
import { TextInput } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'

import api from '../../services/api';
import { Left } from 'native-base';
 
export default function Disease({navigation}) {

    const { animal } = navigation.state.params

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


    return(
        <ScrollView style={styles.container}>
            

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 19, fontWeight: "bold", marginBottom: 20, color: '#FFFFFF' }}>
                    Patologias de { animal }
                </Text>
                {
                    animal == 'Gato' ?
                    optionsCat.map(doenca => (
                        <Text key={doenca.id} style={{ fontSize: 15, color: '#FFFFFF' }}> { doenca.doenca } </Text>
                    ))
                    :
                    animal == 'Cão' ?
                    optionsDog.map(doenca => (
                        <Text key={doenca.id} style={{ fontSize: 15, color: '#FFFFFF' }}> { doenca.doenca } </Text>
                    ))
                    : null
                }
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
            width:'9%',
            height: 40,
            borderRadius:10,
            marginTop:5,
            marginLeft: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
 
)