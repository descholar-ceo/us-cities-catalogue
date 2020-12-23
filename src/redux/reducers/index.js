import { combineReducers } from 'redux';
import cityReducer from './city';
import filterReducer from './filter';

export default combineReducers({ cities: cityReducer, filter: filterReducer });
