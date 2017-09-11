import React from 'react';
import { connect } from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import RegistrationScreen from '../components/RegistrationScreen/RegistrationScreen';
import Home from '../components/Home/Home';

export const AppNavigator = StackNavigator({
	Home: {screen: Home},
	RegistrationScreen: {screen: RegistrationScreen},
});

const AppWithNavigationState = ({ dispatch, nav }) => (
	<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
	nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);