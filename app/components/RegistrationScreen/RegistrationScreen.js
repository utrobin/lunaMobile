import React from 'react';
import {StyleSheet, View} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {Button, Text, Form, Item, Label, Input} from 'native-base';

function WrapperInput (props) {
	const {input, label, ...inputProps} = props;

	return (
		<Item floatingLabel>
			<Label>{label}</Label>
			<Input
				{...inputProps}
				onChangeText={input.onChange}
				onBlur={input.onBlur}
				onFocus={input.onFocus}
				value={input.value}
			/>
		</Item>
	);
}

class RegistrationScreen extends React.Component {
	static navigationOptions = {
		title: 'Регистрация',
	};

	render() {
		return (
			<View>
				<Form>
					<Field
						label="email"
						name="email"
						component={WrapperInput}
					/>

					<Item floatingLabel last>
						<Label>Password</Label>
						<Input />
					</Item>

					<Button
						onPress={() => {}}
						block
					>
						<Text>Зарегистрироваться</Text>
					</Button>
				</Form>
			</View>
		);
	}
}

export default reduxForm({form: 'signUp'})(RegistrationScreen);
