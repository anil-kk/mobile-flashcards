import { ADD_DECK, ADD_CARD } from '../actions/types';

const decks = (state = [], action) => {
  switch (action.type) {
    case ADD_DECK:
      return [...state, action.deck];
    case ADD_CARD:
      const filtered = state.filter((deck) => deck.id !== action.card.deckId);
      const deck = state.filter((deck) => deck.id === action.card.deckId)[0];
      return [...filtered, { ...deck, cards: [...deck.cards, action.card.id] }];
    default:
      return state;
  }
};

export default decks;
