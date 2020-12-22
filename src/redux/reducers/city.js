import { DISPLAY_DETAILS_OF_A_CITY, GET_ALL_CITIES } from '../actions/actionsTypes';
import cities from '../../assets/samples/cities-sample';

const initialState = {
  cities,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return [...state, action.cities];
    case DISPLAY_DETAILS_OF_A_CITY:
      return { ...state, city: action.city };
    default:
      return state;
  }
};

export default cityReducer;
