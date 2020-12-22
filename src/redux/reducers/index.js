import { combineReducers } from 'redux';
import cityReducer from './city';

export default combineReducers({ cities: cityReducer });
