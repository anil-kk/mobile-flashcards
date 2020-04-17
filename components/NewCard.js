import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Switch,
  Button,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';

import { addCardAsync } from '../actions';

const NewCard = (props) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const { route, navigation, dispatch } = props;
  const { deck } = route.params;

  const questionChangeHandler = (text) => setQuestion(text);
  const answerChangeHandler = (text) => setAnswer(text);
  const answerValidationChangeHandler = (value) => setIsCorrectAnswer(value);

  const buttonPressHandler = () => {
    const card = { question, answer, isCorrectAnswer, deckId: deck.id };

    if (question === '' || answer === '') {
      return;
    }
    dispatch(addCardAsync(card));
    navigation.navigate('Deck', { deck });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
    >
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

      <View style={styles.switchContainer}>
        <Switch
          value={isCorrectAnswer}
          onValueChange={answerValidationChangeHandler}
          title='Is Correct answer'
          style={styles.switch}
        ></Switch>
        <Text style={styles.switchLabel}>
          Turn this on if above answer is correct.
        </Text>
      </View>

      <Button
        onPress={buttonPressHandler}
        title='Add'
        style={{ height: 100 }}
      ></Button>
    </KeyboardAvoidingView>
  );
};

export default connect()(NewCard);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 50,
  },
  textInput: {
    height: 50,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
  },
  switch: {
    alignSelf: 'center',
  },
  switchLabel: {
    alignSelf: 'center',
  },
});
