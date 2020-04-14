import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Card = (props) => {

    const {card} = props
    return (
        <View style={styles.card}>
            <Text> Get CARD details, one after the other</Text>

            <Button title='Correct'/>
            <Button title='Incorrect'/>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        fontSize: 20,
        height: 400,
        paddingHorizontal: 20,
        margin:20,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:20,
        backgroundColor: 'beige',
        shadowOffset: {
          width: 7,
          height: 8
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation:4
    }
})
