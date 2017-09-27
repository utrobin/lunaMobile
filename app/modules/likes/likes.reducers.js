import { handleActions } from 'redux-actions';
import {
  DISLIKE,
  LIKE,
} from './likes.constants';

const initialState = {
  value: false,
  stack: 0,
};

export default handleActions({
  [LIKE]: (state) => {
    const stack = state.stack - 1;
    let value: boolean = false;

    if (stack > 0) {
      value = true;
    }

    return { stack, value };
  },

  [DISLIKE]: (state) => {
    const stack = state.stack + 1;
    let value: boolean = false;

    if (stack > 0) {
      value = true;
    }

    return { stack, value };
  },
}, initialState);
