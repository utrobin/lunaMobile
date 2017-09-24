import { handleActions } from 'redux-actions';
import {
  REFRESHING_POP,
  REFRESHING_PUSH,
} from './refreshing.constants';

const initialState = {
  value: false,
  stack: 0,
};

export default handleActions({
  [REFRESHING_POP]: (state) => {
    const stack = state.stack - 1;
    let value: boolean = false;

    if (stack > 0) {
      value = true;
    }

    return { stack, value };
  },

  [REFRESHING_PUSH]: (state) => {
    const stack = state.stack + 1;
    let value: boolean = false;

    if (stack > 0) {
      value = true;
    }

    return { stack, value };
  },
}, initialState);
