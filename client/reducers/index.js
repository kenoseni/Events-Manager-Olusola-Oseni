import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import centerReducer from './CenterReducer';
import auth from './AuthReducer';

const { user } = userReducer;
const { eventCenters } = centerReducer;

export default combineReducers({
  user,
  auth,
  eventCenters,
});
