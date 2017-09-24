import { combineReducers } from 'redux';
import { FormReducer, reducer as formReducer } from 'redux-form';
import people from '../people/people.reducer';
import nav from '../navigation/navigation.reducers';
import loading from '../loading/loading.reducers';

const rootReducer = combineReducers({
  loading,
  nav,
  people,
  form: formReducer,
});

export default rootReducer;
