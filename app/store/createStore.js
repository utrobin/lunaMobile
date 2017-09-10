import {createStore as cS, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../modules/index/index.reducer';

export default function createStore() {
	const store = cS (
		rootReducer,
		applyMiddleware(logger),
	);

	return store;
}
