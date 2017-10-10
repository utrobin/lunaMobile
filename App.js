import React from 'react';
import { ApolloProvider } from 'react-apollo';
import {Button, Form, Item, Input, Label} from 'native-base';
import createStore from './app/store/createStore';
import {client} from './app/modules/index/index.reducer';
import AppWithNavigationState from './app/navigators/AppNavigator';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const store = createStore();

class App extends React.Component {

	render() {
		return (
			<ApolloProvider store={store} client={client}>
				<AppWithNavigationState />
			</ApolloProvider>
		);
	}
}

export default App;
