import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';
import styled from 'styled-components/native'
import { Container } from 'native-base'

export default function Home() {

    const [ pets, setPet ] = useState([])

    useEffect(() => {
        async function getPets () {
            const response = await api.get('/pet')

            setPet(response.data)
        }

        getPets()

    }, [])
    return (
        <Container style={{ margin: 0 }}>
            <ScrollView style={ styles.container }>
                <Row>
                    {
                        pets.map(pet => (
                            <Box>
                                <Text style={ style.petName }>{ pet.name } </Text>
                            </Box>  
                        ))
                    }
                    
                </Row>
                
            </ScrollView>
            <AddButton >
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
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
`;

const AddButton = styled.TouchableHighlight`
        align-items: center;
        justify-content: center;
        width: 70;
        position: absolute;                                       
        bottom: 20;                                            
        right: 20;
        height: 70;
        background-color: #FFFFFF;
        border-radius: 100;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.24);
        elevation: 3;
`;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8D99AE",
        padding: "3%"
    },
    petName: { 
        textAlign: 'center', 
        marginTop: 10 
    }
});