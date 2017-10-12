import { combineReducers } from 'redux';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { reducer as formReducer } from 'redux-form';
import people from '../people/people.reducer';
import nav from '../navigation/navigation.reducers';
import modal from '../modal/modal.reducer';
import refreshing from '../refreshing/refreshing.reducers';


const networkInterface = createNetworkInterface({ uri: 'https://utrobin.com/graphql' });

networkInterface.useAfter([{
  applyAfterware(req, next) {
    const data = {};

    // eslint-disable-next-line
    const body = JSON.parse(req.response._bodyInit);

    if (body.code !== 200) {
      data.errors = body;
    } else {
      data.data = body.body;
    }

    // eslint-disable-next-line
    req.response._bodyInit = JSON.stringify(data);
    // eslint-disable-next-line
    req.response._bodyText = JSON.stringify(data);

    next();
  },
}]);

export const client = new ApolloClient({
  networkInterface,
});

const rootReducer = combineReducers({
  refreshing,
  nav,
  people,
  modal,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
