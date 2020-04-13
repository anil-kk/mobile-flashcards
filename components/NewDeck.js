import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { addDeckAsync } from '../actions';

const NewDeck = (props) => {
  const { dispatch, navigation } = props;

  const [deckName, setDeckName] = useState('');
  const textChangeHandler = (text) => setDeckName(text);
  const buttonPressHandler = () => {
    const deck = { name: deckName, cards: [] };

    if (deckName === '') {
      return;
    }
    dispatch(addDeckAsync(deck));
    navigation.navigate('DeckList');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter deck name'
        value={deckName}
        onChangeText={textChangeHandler}
        style={styles.textInput}
      />
      <Button onPress={buttonPressHandler} title='Add'></Button>
    </View>
  );
};

export default connect()(NewDeck);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop:50
  },
  textInput:{
    height: 50,
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft:5
  }
});
