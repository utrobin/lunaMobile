import React from 'react';
import {StyleSheet, View, AppRegistry} from 'react-native';
import {Button, Text, Form, Item, Input, Label} from 'native-base';
import {Provider, connect} from 'react-redux';
import createStore from './app/store/createStore';
import AppWithNavigationState from './app/navigators/AppNavigator';

const store = createStore();

class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

export default App;
