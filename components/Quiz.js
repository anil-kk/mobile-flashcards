import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import Card from './Card';

const Quiz = (props) => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const { route, navigation, dispatch, cards } = props;
  const { deck } = route.params;
  const deckCards = deck.cards.map((cardId) => cards[cardId]);
  const totalCards = deckCards.length;
  const indicatorText = `${currentCardIndex + 1} of ${totalCards}`;

  const toggleQuestionVisibility = () => {
    setIsQuestionVisible(!isQuestionVisible);
  };

  const hasNext = () => {
    return currentCardIndex < totalCards;
  };

  const isDeckEmpty = () => {
    return totalCards === 0
  }

  const nextIndex = () => {
    if (!hasNext()) {
      return;
    }
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleCorrectAnswer = (card) => {
    const { isCorrectAnswer } = card;
    if (isCorrectAnswer === true) {
      setScore(score + 1);
    }
    nextIndex();
  };

  const handleInCorrectAnswer = (card) => {
    const { isCorrectAnswer } = card;
    if (isCorrectAnswer === false) {
      setScore(score + 1);
    }
    nextIndex();
  };


  if(isDeckEmpty()){
    return (
      <View style={styles.info}><Text>Deck is empty!</Text></View>
    )
  }

  return (
    <View>
      {hasNext() ? (
        <View>
          <Text style={styles.info}>{indicatorText}</Text>

          <Card
            card={deckCards[currentCardIndex]}
            handleCorrectAnswer={handleCorrectAnswer}
            handleInCorrectAnswer={handleInCorrectAnswer}
            toggleQuestionVisibility={toggleQuestionVisibility}
            isQuestionVisible={isQuestionVisible}
            indicatorText={indicatorText}
          ></Card>
        </View>
      ) : (
        <View style={styles.score}>
          <Text style={{ fontSize: 15, alignSelf: 'center' }}>SCORE</Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              alignSelf: 'center',
              color: 'red',
            }}
          >
            {score}
          </Text>

          <View style={styles.buttonGroup}>
            <Button
              title='Back To Deck'
              onPress={() => navigation.goBack()}
            />
            <Button
              title='Restart Quiz'
              onPress={() => navigation.push('Quiz', { deck })}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  info: {
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  score: {
    fontSize: 20,
    height: 200,
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
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
