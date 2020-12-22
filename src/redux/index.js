import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import cities from '../assets/samples/cities-sample';

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);

const initialState = {
  cities,
};

const store = createStore(rootReducer, initialState, composeWithDevTools(middlewareEnhancer));

export default store;
