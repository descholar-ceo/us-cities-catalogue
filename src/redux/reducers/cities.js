import { GET_ALL_CITIES } from '../actions/actionsTypes';

const initialState = {
  cities: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return [
        ...state, action.cities,
      ];
    default:
      return state;
  }
};

export default bookReducer;
