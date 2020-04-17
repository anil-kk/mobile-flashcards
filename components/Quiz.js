import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import Card from './Card';
import Score from './Score';

const Quiz = (props) => {
  const [score, setScore] = useState(0);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const { route, cards, decks } = props;
  const { deck } = route.params;
  const deckCards = deck.cards.map((cardId) => cards[cardId]);
  const totalCards = deckCards.length;
  const indicatorText = `${currentCardIndex + 1} of ${totalCards}`;

  const reset = ()=>{
    setCurrentCardIndex(0)
  }

  const toggleQuestionVisibility = () => {
    setIsQuestionVisible(!isQuestionVisible);
  };

  const hasNext = () => {
    return currentCardIndex < totalCards;
  };

  const isDeckEmpty = () => {
    return totalCards === 0;
  };

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

  if (isDeckEmpty()) {
    return (
      <View style={styles.info}>
        <Text>Deck is empty!</Text>
      </View>
    );
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
        <Score reset={reset} score={score} deck={deck} {...props}/>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards,
  decks: state.decks
});

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  info: {
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  }
});
