import { combineReducers } from 'redux';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { reducer as formReducer } from 'redux-form';
import people from '../people/people.reducer';
import nav from '../navigation/navigation.reducers';
import loading from '../loading/loading.reducers';
import refreshing from '../refreshing/refreshing.reducers';


const networkInterface = createNetworkInterface({ uri: 'https://utrobin.com/graphql' });

networkInterface.useAfter([{
  applyAfterware(req, next) {
    let data = {};

    const body = JSON.parse(req.response._bodyInit);

    if (body.code !== 200) {
      data.errors = body;
    } else {
      data.data = body.body;
    }

    req.response._bodyInit = JSON.stringify(data);
    req.response._bodyText = JSON.stringify(data);

    next();
  }
}]);

export const client = new ApolloClient({
  networkInterface,
});

const rootReducer = combineReducers({
  loading,
  refreshing,
  nav,
  people,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
