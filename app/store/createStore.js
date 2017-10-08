import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../modules/index/index.reducer';

export default function () {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(logger),
    )
  );
}
