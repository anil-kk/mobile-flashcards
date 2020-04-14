import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Card = (props) => {
  const {
    card,
    handleCorrectAnswer,
    handleInCorrectAnswer,
    toggleQuestionVisibility,
    isQuestionVisible,
  } = props;
  const answerText = card.isCorrectAnswer ? 'Correct' : 'InCorrect';
  return (
    <View style={styles.card}>
      <View>
        {isQuestionVisible ? (
          <View style={styles.cardQuestion}>
            <Text style={styles.question}> {card.question}?</Text>
            <Text> {card.answer}</Text>
          </View>
        ) : (
          <View style={styles.cardAnswer}>
            <Text style={{ color: 'white' }}> Actual Answer: {answerText}</Text>
          </View>
        )}
      </View>

      <Button
        title={isQuestionVisible ? 'Answer' : 'Question'}
        onPress={toggleQuestionVisibility}
      />

      <View style={styles.buttonGroup}>
        <Button
          title='Correct'
          onPress={() => handleCorrectAnswer(card)}
          color='green'
        />
        <Button
          title='Incorrect'
          onPress={() => handleInCorrectAnswer(card)}
          color='red'
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    fontSize: 20,
    height: 400,
    paddingHorizontal: 20,
    margin: 20,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'beige',
    shadowOffset: {
      width: 7,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },

  cardAnswer: {
    height: 100,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  cardQuestion: {
    height: 100,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  correct: {
    backgroundColor: 'green',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
