import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Quiz = (props) => {

    const { route, navigation, dispatch } = props;
    const { deck } = route.params;
    return (
        <View>
            <Text>{JSON.stringify(deck)}</Text>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({})
