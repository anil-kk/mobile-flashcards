import { ADD_DECK, ADD_CARD } from './types';

import API from '../storage';

const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
  };
};

const addCard = (card) => {
  return {
    type: ADD_CARD,
    card,
  };
};

export const addCardAsync = (card) => {
  return (dispatch, getState) => {
    return API.addCard(deck).then((updatedCard) => {
      dispatch(addCard(updatedCard));
    });
  };
};

export const addDeckAsync = (deck) => {
  return (dispatch, getState) => {
    return API.addDeck(deck).then((updatedDeck) => {
      dispatch(addDeck(updatedDeck));
    });
  };
};


