import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';

import Card from './Card';

const Quiz = (props) => {

    const { route, navigation, dispatch, cards } = props;
    const { deck } = route.params;
    const deckCards = deck.cards.map( cardId => cards[cardId])

    console.log('deckCards', deckCards)
    return (
        <View>
            <Text>{JSON.stringify(deckCards)}</Text>

            <Card></Card>


        </View>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({})
