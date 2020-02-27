import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const initialState = {};
const middleware = [logger];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
