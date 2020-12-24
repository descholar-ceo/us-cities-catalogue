import { GET_ALL_CITIES } from '../actions/actionsTypes';

const initialState = {};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return { ...state, cities: action.cities };
    default:
      return state;
  }
};

export default cityReducer;
