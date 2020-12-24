import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(middlewareEnhancer));

export default store;
