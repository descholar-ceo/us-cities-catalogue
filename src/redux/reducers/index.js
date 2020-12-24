import { combineReducers } from 'redux';
import cityReducer from './city';
import cityImageReducer from './cityImage';
import filterReducer from './filter';

export default combineReducers({
  cityReducer,
  filter: filterReducer,
  cityImageReducer,
});
