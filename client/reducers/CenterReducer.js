export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ALL_CENTERS': {
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
    case 'ALL_CENTERS_RESOLVED': {
      const { name, description, location, id, address, avaliability } = action.payload;
      const newCenter = { name, description, location, id, address, avaliability };
      console.log(action.payload)
      return action.payload.center
    }
    case 'ALL_CENTERS_REJECTED': {
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