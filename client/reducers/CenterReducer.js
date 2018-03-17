/**
* Class representing center reducer
*
* @class centerReducer
*/
class centerReducer {
  /**
  *
  * @static
  * @param {object} state - The initial state of the store
  * @param {object} action - The action to be dispatched
  * @return {object} new state of the store
  * @memberof centerReducer
  */
  static eventCenters(state = {
    status: '',
    message: '',
    centers: [],
    center: {}
  }, action) {
    switch (action.type) {
      case 'ALL_CENTERS': {
        return {
          ...state
        };
      }
      case 'ALL_CENTERS_RESOLVED': {
        const {
          status, message, centers
        } = action.payload;
        return {
          ...state,
          status,
          message,
          centers
        };
      }
      case 'ALL_CENTERS_REJECTED': {
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
export default centerReducer;
