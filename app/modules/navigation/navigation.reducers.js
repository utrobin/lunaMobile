import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';
import { NAVIGATION_HOME, NAVIGATION_MASTER, NAVIGATION_REGISTRATION } from './navigation.constants';
import { initialAction } from './navigation.actions';

const initialState = AppNavigator.router.getStateForAction(initialAction);

function nav(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case NAVIGATION_HOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case NAVIGATION_REGISTRATION:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'RegistrationScreen' }),
        state,
      );
      break;
    case NAVIGATION_MASTER:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Master' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

export default nav;
