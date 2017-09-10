import {handleActions} from 'redux-actions';

// import {
// 	Pages,
// 	STEP_NEXT_APPLY,
// } from './step.constants';

const initialState = {
	value: 'Redux'
};

export default handleActions({
	['TEST']: (state) => state + 1,
}, initialState);
