import { GET_CITY_IMAGE } from '../actions/actionsTypes';

const initialState = {};

const cityImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_IMAGE:
      return { ...state, cityImages: action.cityImage };
    default:
      return state;
  }
};

export default cityImageReducer;
