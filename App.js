import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Form, Item, Input, Label} from 'native-base';
import {Provider} from 'react-redux';
import {StackNavigator} from 'react-navigation';
import Test from './app/components/App/App';
import createStore from './app/store/createStore';

const store = createStore();

class ChatScreen extends React.Component {
	static navigationOptions = {
		title: 'Регистрация',
	};

	render() {
		return (
      <View>
	      <Form>
		      <Item floatingLabel>
			      <Label>Username</Label>
			      <Input />
		      </Item>
		      <Item floatingLabel last>
			      <Label>Password</Label>
			      <Input />
		      </Item>
	      </Form>
      </View>
		);
	}
}

class Home extends React.Component {
	// static navigationOptions = {
	// 	title: 'HomePage',
	// };

  render() {
	  const { navigate } = this.props.navigation;

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will autom4324atically reload.</Text>
          <Text>Shake your phone to323 open the developer menu.</Text>

          <Test />

          <Button
            onPress={() => navigate('Chat')}
            block
          >
            <Text>Регистрация</Text>
          </Button>
        </View>
      </Provider>
    );
  }
}

export default SimpleApp = StackNavigator({
	Home: { screen: Home },
	Chat: { screen: ChatScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
});
