import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../modules/index/index.reducer';

export default function () {
  return createStore(
    rootReducer,
    applyMiddleware(logger),
  );
}
