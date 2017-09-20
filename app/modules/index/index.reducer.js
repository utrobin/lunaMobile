import {combineReducers} from 'redux';
import { NavigationActions } from 'react-navigation';
import {FormReducer, reducer as formReducer} from 'redux-form';
import {AppNavigator} from '../../navigators/AppNavigator';
import people from '../people/people.reducer';
import loading from '../loading/loading.reducers';

const firstAction=AppNavigator.router.getStateForAction(NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'Home'
        }),
    ],
}));

const initialNavState = AppNavigator.router.getStateForAction(
	firstAction,
);

function nav(state = initialNavState, action) {
	let nextState;
	switch (action.type) {
		case 'Home':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
			break;
		case 'RegistrationScreen':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'RegistrationScreen' }),
				state
			);
			break;
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);
			break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
}

const rootReducer = combineReducers({
	loading,
	nav,
	people,
	form: formReducer,
});

export default rootReducer;
