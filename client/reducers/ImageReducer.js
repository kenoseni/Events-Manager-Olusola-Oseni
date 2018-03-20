export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return {
        ...state
      };
    case 'ADD_IMAGE_RESOLVED':
      return {
        ...state,
        image: action.image
      };
    case 'ADD_IMAGE_REJECTED':
      return {
        ...state,
        payload: action.payload
      };
    default: {
      return state;
    }
  }
};
