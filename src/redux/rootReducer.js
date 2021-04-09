import { combineReducers } from 'redux';

import cakeReducer from './cake/cakeReducers';
import iceCreamReducer from './iceCream/iceCreamReducers';
import muffinReducer from './muffin/muffinReducers';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  muffin: muffinReducer,
});

export default rootReducer;
