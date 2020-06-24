import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    AsyncStorage,
    Image 
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';
import styled from 'styled-components/native'
import { Container, Header, Left, Body, Title } from 'native-base'
import logo from '../../../assets/logo.png'




export default function Home({ navigation }) {

    const [ pets, setPet ] = useState([])

    useEffect(() => {
        async function getPets () {
            const userId = await AsyncStorage.getItem('@ipet:userId')
            
            const response = await api.get(`/pet/${userId}`)

            setPet(response.data)
        }

        getPets()

    }, [])
    return (
        <Container style={{ marginTop: 0 }}>
        {
        /** 
            <Header style={{ backgroundColor: '#8D99AE', height: 50 }}>
                <Left style={{ marginRight: 73 }}>
                    <TouchableHighlight onPress={() => navigation.push('First')}>
                        <AntDesign name="logout" size={20} color="white" />
                    </TouchableHighlight>
                    
                </Left>
                <Body>
                    <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize: 16 }}> Home </Text>
                </Body>
                
            </Header>
        */
        }
            <ScrollView style={ styles.container }>
                <Row>
                    {
                        pets.map(pet => (
                            <Box style={{ alignItems: "center" }} key={pet._id}>
                                <Image source={logo} style={ styles.logo } />
                                <Text style={ styles.petName }
                                onPress={() => navigation.push('Profile', { petId: pet._id })}>{ pet.name } </Text>
                            </Box>  
                        ))
                    }
                    
                </Row>
                
            </ScrollView>
            <AddButton style={{ position: "absolute" }} onPress={() => navigation.push('Form')}>
                <AntDesign name="plus" size={24} color="black" />
            </AddButton>
        </Container>    

    )
}


const Box = styled.View`
    background-color: #FFFFFF;
    width: 42%;
    height: 170px;
    border-radius: 7px;
    margin: 4%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.24);
    justify-content: center;
    
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
`;

const AddButton = styled.TouchableHighlight`
        align-items: center;
        justify-content: center;
        width: 70px;                                     
        bottom: 70px;                                            
        right: 20px;
        height: 70px;
        background-color: #FFFFFF;
        border-radius: 100px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.24);
`;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8D99AE",
        padding: "3%"
    },
    petName: { 
        textAlign: 'center', 
        marginTop: 10 
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginBottom: 10
    }
});