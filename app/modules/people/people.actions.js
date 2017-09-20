import {createAction} from 'redux-actions';
import {PEOPLE_ADD_DATA} from "./people.constants";

const getPeopleFinish = createAction(
	PEOPLE_ADD_DATA,
	data => data,
);

export {
	getPeopleFinish,
};
