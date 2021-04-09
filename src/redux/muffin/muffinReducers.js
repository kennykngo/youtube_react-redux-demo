import { BUY_MUFFIN } from './muffinTypes';

const initialState = {
  numOfMuffins: 30,
};

const muffinReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MUFFIN:
      return {
        ...state,
        numOfMuffins: state.numOfMuffins - 1,
      };

    default:
      return state;
  }
};

export default muffinReducer;
