/**
* Class representing event reducer
*
* @class eventReducer
*/
class eventReducer {
  /**
  *
  * @static
  * @param {object} state - The initial state of the store
  * @param {object} action - The action to be dispatched
  * @return {object} new state of the store
  * @memberof eventReducer
  */
  static userEvents(state = {
    status: '',
    message: '',
    events: [],
    event: {}
  }, action) {
    switch (action.type) {
      case 'ALL_USER_EVENT': {
        return {
          ...state
        };
      }
      case 'ALL_USER_EVENT_RESOLVED': {
        const {
          status, message, events
        } = action.payload.data;
        return {
          ...state,
          status,
          message,
          events
        };
      }
      case 'ALL_USER_EVENT_REJECTED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          status,
          message
        };
      }
      default: {
        return state;
      }
    }
  }
}
export default eventReducer;
