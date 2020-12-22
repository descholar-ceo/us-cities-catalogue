import { FILTER_CITY, GET_ALL_CITIES } from '../actions/actionsTypes';
import cities from '../../assets/samples/cities-sample';

const initialState = {
  cities,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return [...state, action.cities];
    case FILTER_CITY:
      return { ...state, city: state.cities.filter(city => city.city === action.filter) };
    default:
      return state;
  }
};

export default cityReducer;
