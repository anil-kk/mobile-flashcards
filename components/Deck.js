import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { connect } from 'react-redux'


const Deck = (props) => {

    const {route, navigation, decks} = props
    const {deck} = route.params

    return (
        <View styel={styles.container}>

            <View style={styles.details}>
            <Text style={styles.title}> {deck.name}</Text>
            <Text style={styles.text}> {deck.cards.length} Cards</Text>
            </View>

            <Button title='Add Card' onPress={()=> navigation.navigate('NewCard', {deck})}></Button>
            <Button title='Add Quiz' onPress={()=> navigation.navigate('Quiz', {deck})}></Button>

        </View>
    )
}

const mapStateToProps = (state) => ({
    decks: state.decks,
    cards: state.cards
  });
  

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    details:{
        justifyContent:'space-between',
        alignContent:'center',
    
        marginVertical:20,
    },
    text:{
        fontSize:20,

        alignSelf:'center'
    },
    title:{
        fontSize:40,
        alignSelf:'center'

    }
  });
