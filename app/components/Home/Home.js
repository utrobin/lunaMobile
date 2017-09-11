import React from 'react';
import {StyleSheet, View, AppRegistry} from 'react-native';
import {connect} from 'react-redux';
import {Button, Text} from 'native-base';
import Test from '../App/App';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 10,
		justifyContent: 'center',
	},
    regBtn: {
	    marginTop: 25,
    }
});

class Home extends React.Component {
	static navigationOptions = {
		title: 'Luna',
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Добро пожаловать в проект Луна!</Text>
				<Text>Ниже вы можете приступить к регистрации</Text>

				<Button style={styles.regBtn}
					onPress={() => this.props.navigateRegestration()} block>
					<Text>Регистрация</Text>
				</Button>
			</View>
		);
	}
}

const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
	return {
		navigateRegestration() {
			dispatch({type: 'RegistrationScreen'});
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
