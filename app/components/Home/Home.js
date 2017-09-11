import React from 'react';
import {StyleSheet, View, AppRegistry} from 'react-native';
import {Button, Text} from 'native-base';
import Test from '../App/App';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 10,
		justifyContent: 'center',
	},
});

export default class Home extends React.Component {
	// static navigationOptions = {
	// 	title: 'HomePage',
	// };

	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will autom4324atically reload.</Text>
				<Text>Shake your phone to323 open the developer menu.</Text>

				<Test />

				<Button
					onPress={() => {}}
					block
				>
					<Text>Регистрация</Text>
				</Button>
			</View>
		);
	}
}