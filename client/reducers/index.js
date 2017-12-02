import { combineReducers } from 'redux';

import user from './UserReducer';
import center from './CenterReducer';
import event from './EventReducer';

export default combineReducers({
  user,
  center,
  event
});
