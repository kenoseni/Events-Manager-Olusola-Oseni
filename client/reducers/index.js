import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import centerReducer from './CenterReducer';
import eventReducer from './EventReducer';
import flashMessage from './FlashMessageReducer';
import image from './ImageReducer';
import auth from './AuthReducer';

const { user } = userReducer;
const { eventCenters } = centerReducer;
const { userEvents } = eventReducer;

export default combineReducers({
  user,
  auth,
  eventCenters,
  userEvents,
  flashMessage,
  image
});
