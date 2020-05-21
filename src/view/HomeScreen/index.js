import React from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native'

import styled from 'styled-components/native'

export default function Home() {
    return (
        <ScrollView style={ styles.container }>
            <Row>
                <Box />
                <Box />
            </Row>
            <Row>
                <Box />
                <Box />
            </Row>
            
        </ScrollView>
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


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8D99AE",
        padding: "3%"
    }
});