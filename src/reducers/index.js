// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from 'C:/ARTIX/R JS/social-media-app/frontend/social-media-app/src/reducers/authReducers.js';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
