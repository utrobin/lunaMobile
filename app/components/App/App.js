import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Text} from 'native-base';

class Test extends React.Component {
	render() {
		return (
			<View >
				<Text>
					Тест тестович
					{this.props.value}
				</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Test);
