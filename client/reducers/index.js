import { combineReducers } from 'redux';

import user from './UserReducer';
import center from './CenterReducer';

export default combineReducers({
  user,
  center
});
