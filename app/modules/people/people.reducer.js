import {handleActions} from 'redux-actions';
import {PEOPLE_ADD_DATA} from "./people.constants";

const initialState = [];

export default handleActions({
	[PEOPLE_ADD_DATA]: (state, action) => action.payload,
}, initialState);
