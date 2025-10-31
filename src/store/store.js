import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import loremReducer from '../reducers/loremReducer';

const rootReducer = combineReducers({
    lorem: loremReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
