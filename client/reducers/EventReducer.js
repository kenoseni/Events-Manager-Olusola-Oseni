export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ALL_USER_EVENT': {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: true,
          fetched: false,
          error: false
        }
      };
    }
    case 'ALL_USER_EVENT_RESOLVED': {
      const { name, date, time, centerId } = action.payload;
      const newEvent = { name, date, time, centerId };
      console.log(action.payload);
      return action.payload.events;
    }
    case 'ALL_USER_EVENT_REJECTED': {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          error: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
}
