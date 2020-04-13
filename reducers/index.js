import { combineReducers } from 'redux';
import decks from '../reducers/decks';
import cards from '../reducers/cards';

export default combineReducers({
  decks,
  cards,
});
