import { FILTER_CITY } from '../actions/actionsTypes';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CITY:
      return action.mFilter;
    default:
      return state;
  }
};

export default filterReducer;
