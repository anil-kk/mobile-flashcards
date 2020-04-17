import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

const Deck = (props) => {
  const { route, navigation, decks } = props;
  let { deck } = route.params;

  const isNewDeck = !deck.hasOwnProperty('id')

  if (isNewDeck) {
    deck = decks[decks.length - 1];
  }
  const deckfromStore = decks.filter((d) => d.id === deck.id)[0];

  return (
    <View styel={styles.container}>
      {deckfromStore ? (
        <View style={styles.details}>
          <Text style={styles.title}> {deckfromStore.name}</Text>
          <Text style={styles.text}> {deckfromStore.cards.length} Cards</Text>
        </View>
      ) : null}

      <View style={styles.buttonGroup}>
        <Button
          title='Add Card'
          onPress={() => navigation.navigate('NewCard', { deck: deckfromStore })}
        ></Button>
        <Button
          title='Start Quiz'
          onPress={() => navigation.navigate('Quiz', { deck: deckfromStore })}
        ></Button>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  decks: state.decks,
  cards: state.cards,
});

export default connect(mapStateToProps)(Deck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  details: {
    fontSize: 20,
    height: 80,
    paddingHorizontal: 20,
    margin: 10,
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
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});
