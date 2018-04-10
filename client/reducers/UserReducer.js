/**
* Class representing reducer
*
* @class userReducer
*/
class userReducer {
  /**
  * Register a user on the platform
  *
  * @static
  * @param {object} state - The initial state of the store
  * @param {object} action - The action to be dispatched
  * @return {object} new state of the store
  * @memberof userReducer
  */
  static user(state = {}, action) {
    switch (action.type) {
      case 'SIGNUP_USER': {
        return {
          ...state
        };
      }
      case 'SIGNUP_USER_RESOLVED': {
        const {
          firstname, lastname, role, token, status, message
        } = action.payload.data;
        return {
          ...state,
          firstname,
          lastname,
          role,
          token,
          status,
          message
        };
      }
      case 'SIGNUP_USER_REJECTED': {
        const error = action.payload.data;
        return {
          ...state,
          error
        };
      }
      case 'LOGIN_USER': {
        return {
          ...state
        };
      }
      case 'LOGIN_RESOLVED': {
        const { status, message, token } = action.payload.data;
        return {
          ...state,
          status,
          message,
          token
        };
      }
      case 'LOGIN_REJECTED': {
        const error = action.payload.data;
        return {
          ...state,
          error
        };
      }
      case 'GET_USERS': {
        return {
          ...state
        };
      }
      case 'GET_USERS_RESOLVED': {
        const {
          status, message, users
        } = action.payload.data;
        return {
          ...state,
          status,
          message,
          users
        };
      }
      case 'GET_USERS_REJECTED': {
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
export default userReducer;
