import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import people from '../people/people.reducer';
import nav from '../navigation/navigation.reducers';
import loading from '../loading/loading.reducers';
import refreshing from '../refreshing/refreshing.reducers';
import likes from '../likes/likes.reducers';

const rootReducer = combineReducers({
  loading,
  refreshing,
  likes,
  nav,
  people,
  form: formReducer,
});

export default rootReducer;
