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
      case 'ADD_EVENT': {
        return {
          ...state
        };
      }
      case 'ADD_EVENT_RESOLVED': {
        const {
          event, status, message
        } = action.payload.data;
        return {
          ...state,
          events: [
            ...state.events,
            {
              id: event.id,
              name: event.name,
              centerId: event.centerId,
              date: event.date,
              time: event.time,
            }
          ],
          status,
          message
        };
      }
      case 'ADD_EVENT_REJECTED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          status,
          message
        };
      }
      case 'DELETE_EVENT': {
        return {
          ...state
        };
      }
      case 'DELETE_EVENT_RESOLVED': {
        const {
          status, message
        } = action.payload.data;
        return {
          ...state,
          events: [
            ...state.events.filter(event => event.id !== action.id)
          ],
          status,
          message,
        };
      }
      case 'DELETE_EVENT_REJECTED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          status,
          message
        };
      }
      case 'MODIFY_EVENT': {
        return {
          ...state
        };
      }
      case 'MODIFY_EVENT_RESOLVED': {
        const {
          status, message, event
        } = action.payload.data;
        return {
          ...state,
          events: [
            ...state.events.map((item) => {
              if (item.id !== action.id) {
                return item;
              }
              return {
                id: event.id,
                name: event.name,
                centerId: event.centerId,
                date: event.date,
                time: event.time,
              };
            })
          ],
          status,
          message,
          event
        };
      }
      case 'MODIFY_EVENT_REJECTED': {
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
