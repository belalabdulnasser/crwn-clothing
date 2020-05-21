/* jshint esversion:9 */

import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from './root_reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
