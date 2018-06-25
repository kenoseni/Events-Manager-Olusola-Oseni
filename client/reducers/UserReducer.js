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
          firstname, lastname, role, token
        } = action.payload.data;
        const { status, message } = action.payload;
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
        const error = action.payload;
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
        const { token } = action.payload.data;
        const { status, message } = action.payload;
        return {
          ...state,
          status,
          message,
          token
        };
      }
      case 'LOGIN_REJECTED': {
        const error = action.payload;
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
          users, count, limit
        } = action.payload.data;
        const { status, message } = action.payload;
        return {
          ...state,
          status,
          message,
          users,
          count,
          limit
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
      case 'UPGRADING_USER': {
        return {
          ...state
        };
      }
      case 'UPGRADING_USER_RESOLVED': {
        const { status, message } = action.payload;
        const
          {
            id, firstname, lastname, email, role, isAdmin
          } = action.payload.data;
        return {
          ...state,
          users: [
            ...state.users.map((user) => {
              if (user.id !== action.id) {
                return user;
              }
              return {
                id,
                firstname,
                lastname,
                role,
                isAdmin,
                email
              };
            })
          ],
          status,
          message
        };
      }
      case 'UPGRADING_USER_REJECTED': {
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
