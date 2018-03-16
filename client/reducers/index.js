import { combineReducers } from 'redux';

import userReducer from './UserReducer';

const { user } = userReducer;

export default combineReducers({
  user,
});
