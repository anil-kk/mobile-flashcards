import { ADD_CARD } from '../actions/types';


const cards = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {...state,
      [action.card.id]: action.card}
    default:
      return state;
  }
};

export default cards;
