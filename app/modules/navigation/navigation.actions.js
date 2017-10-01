import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

export const initialAction = AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'Home',
      }),
    ],
  }),
);
