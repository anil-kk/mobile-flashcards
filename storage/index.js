import { AsyncStorage } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



const setInitialData = () => {
  const deckId = uuidv4();
  const cardId = uuidv4();
  const initialDeckState = [
    {
      deckId,
      key: deckId,
      name: 'Initial Desk',
      cards: [cardId],
    },
  ];
  
  const initialCardState = {
    [cardId]: {
      cardId,
      deckId,
      name: 'Initial Card',
      question: 'What is react',
      answer: 'React is java',
      isCorrectAnswer: false,
    },
  };
  
  AsyncStorage.setItem('decks', JSON.stringify(initialDeckState));
  AsyncStorage.setItem('cards', JSON.stringify(initialCardState));
}

const getDecks = async () => {
  try {
    const value = await AsyncStorage.getItem('decks');
    return JSON.parse(value);
  } catch (e) {
    // read error
  }
};

const getCards = async () => {
  try {
    const value = await AsyncStorage.getItem('cards');
    return JSON.parse(value);
  } catch (e) {
    // read error
  }
};

const addDeck = async (deck) => {
  const id = uuidv4();
  const newDesk = { ...deck, id: id, key: id };

  try {
    const rawData = await AsyncStorage.getItem('decks');
    const currentDecks = JSON.parse(rawData);

    const updatedDesks = [...currentDecks, newDesk];

    await AsyncStorage.setItem('decks', JSON.stringify(updatedDesks));
  } catch (e) {
    // save error
  }

  return newDesk;
};


const addCard = async (card) => {
  const id = uuidv4();
  const newCard = { ...card, id: id };

  try {
    const rawDecksData = await AsyncStorage.getItem('decks');
    const currentDecks = JSON.parse(rawDecksData);
    const filtered = currentDecks.filter((deck) => deck.id !== newCard.deckId);
    const deck = currentDecks.filter((deck) => deck.id === newCard.deckId)[0];
    const updatedDesks= [...filtered, { ...deck, cards: [...deck.cards, newCard.id] }];

    await AsyncStorage.setItem('decks', JSON.stringify(updatedDesks));


    const rawData = await AsyncStorage.getItem('cards');
    const currentCards = JSON.parse(rawData);
    const updatedCards = { ...currentCards, newCard };

    await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
  } catch (e) {
    // save error
  }

  return newCard;
};

export default {
  getDecks,
  getCards,
  addDeck,
  addCard,
  setInitialData
};
