import {handleActions} from 'redux-actions';
import {
	LOADING_POP,
	LOADING_PUSH,
} from './loading.constants';

const initialState = {
	value: false,
	stack: 0,
};

export default handleActions({
	[LOADING_POP]: (state) => {
		const stack = state.stack - 1;
		let value: boolean = false;

		if (stack > 0) {
			value = true;
		}

		return {stack, value};
	},

	[LOADING_PUSH]: (state) => {
		const stack = state.stack + 1;
		let value: boolean = false;

		if (stack > 0) {
			value = true;
		}

		return {stack, value};
	},
}, initialState);
