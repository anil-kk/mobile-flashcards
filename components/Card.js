import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Switch, Button } from 'react-native';
import { connect } from 'react-redux';

import { addCardAsync } from '../actions';

const Card = (props) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const { route, navigation, dispatch } = props;
  const { deck } = route.params;

  const questionChangeHandler = (text) => setQuestion(text);
  const answerChangeHandler = (text) => setAnswer(text);
  const answerValidationChangeHandler = (value) => setIsCorrectAnswer(value)

  const buttonPressHandler = () => {
    const card = { question, answer, isCorrectAnswer, deckId: deck.id };

    if (question === '' || answer === '') {
      return;
    }
    dispatch(addCardAsync(card));
    navigation.navigate('DeckList');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Question'
        value={question}
        onChangeText={questionChangeHandler}
        style={styles.textInput}
      />
      <TextInput
        placeholder='Enter Answer'
        value={answer}
        onChangeText={answerChangeHandler}
        style={styles.textInput}
      />

      <Switch
        value={isCorrectAnswer}
        onValueChange={answerValidationChangeHandler}
        title='Is Correct answer'

        style={{alignSelf:'center', marginVertical:10}}
      ></Switch>
      <Button onPress={buttonPressHandler} title='Add' style={{height:100, }}></Button>
    </View>
  );
};

export default connect()(Card);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 50,
  },
  textInput: {
    height: 50,
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    marginVertical:10
  },
});
