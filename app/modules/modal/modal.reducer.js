import { handleActions } from 'redux-actions';
import {
  MODAL_ITEM_OPTIONS_OPENED,
  MODAL_ITEM_OPTIONS_CLOSED,
} from './modal.constants';

const initialState = {
  value: false,
  stack: 0,
};

export default handleActions({
  [MODAL_ITEM_OPTIONS_OPENED]: (state) => {
    const stack = state.stack + 1;
    let value: boolean = false;

    if (stack > 0) {
      value = true;
    }

    return { stack, value };
  },

  [MODAL_ITEM_OPTIONS_CLOSED]: (state) => {
    const stack = state.stack - 1;
    let value: boolean = false;

    if (stack > 0) {
      value = true;
    }

    return { stack, value };
  },
}, initialState);
