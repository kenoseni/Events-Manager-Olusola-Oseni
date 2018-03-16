import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import auth from './AuthReducer';

const { user } = userReducer;

export default combineReducers({
  user,
  auth
});
