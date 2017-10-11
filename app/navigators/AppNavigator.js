import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import RegistrationScreen from '../components/RegistrationScreen/RegistrationScreen';
import { BottomTabNavigator } from './TabNavigator';
import Master from '../components/Master/Master';

export const AppNavigator = StackNavigator({
  Home: { screen: BottomTabNavigator },
  RegistrationScreen: { screen: RegistrationScreen },
  Master: { screen: Master },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
