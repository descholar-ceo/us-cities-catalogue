import { combineReducers } from 'redux';
import cityReducer from './cities';

export default combineReducers({ cities: cityReducer });
