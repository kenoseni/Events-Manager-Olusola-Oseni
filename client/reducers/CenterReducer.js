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
    allCenters: [],
    searchedCenters: [],
    center: {}
  }, action) {
    switch (action.type) {
      case 'PAGE_CENTERS': {
        return {
          ...state
        };
      }
      case 'PAGE_CENTERS_RESOLVED': {
        const {
          status, message
        } = action.payload;
        const { centers, count, limit } = action.payload.data;
        return {
          ...state,
          status,
          message,
          centers,
          count,
          limit
        };
      }
      case 'PAGE_CENTERS_REJECTED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          status,
          message
        };
      }
      case 'ALL_CENTERS': {
        return {
          ...state
        };
      }
      case 'ALL_CENTERS_RESOLVED': {
        const {
          status, message
        } = action.payload;
        const { allCenters } = action.payload.data;
        return {
          ...state,
          allCenters,
          status,
          message,
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
      case 'SEARCH_CENTERS': {
        return {
          ...state
        };
      }
      case 'SEARCH_CENTERS_RESOLVED': {
        const {
          status, message
        } = action.payload;
        const { searchedCenters, count, limit } = action.payload.data;
        return {
          ...state,
          status,
          message,
          searchedCenters,
          count,
          limit
        };
      }
      case 'SEARCH_CENTERS_REJECTED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          status,
          message
        };
      }
      case 'ADD_CENTER': {
        return {
          ...state
        };
      }
      case 'ADD_CENTER_RESOLVED': {
        const {
          center
        } = action.payload.data;
        const { status, message } = action.payload;
        return {
          ...state,
          centers: [
            ...state.centers,
            {
              id: center.id,
              name: center.name,
              description: center.description,
              location: center.location,
              price: center.price,
              facilities: center.facilities,
              capacity: center.capacity,
              avaliability: center.avaliability,
              image: center.image
            }
          ],
          status,
          message
        };
      }
      case 'ADD_CENTER_REJECTED': {
        const error = action.payload;
        return {
          ...state,
          error
        };
      }
      case 'DELETE_CENTER': {
        return {
          ...state
        };
      }
      case 'DELETE_CENTER_RESOLVED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          centers: [
            ...state.centers.filter(center => center.id !== action.id)
          ],
          status,
          message,
        };
      }
      case 'DELETE_CENTER_REJECTED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          status,
          message
        };
      }
      case 'MODIFY_CENTER': {
        return {
          ...state
        };
      }
      case 'MODIFY_CENTER_RESOLVED': {
        const {
          center
        } = action.payload.data;
        const { status, message } = action.payload;
        return {
          ...state,
          centers: [
            ...state.centers.map((item) => {
              if (item.id !== action.id) {
                return item;
              }
              return {
                id: center.id,
                name: center.name,
                description: center.description,
                location: center.location,
                price: center.price,
                facilities: center.facilities,
                capacity: center.capacity,
                avaliability: center.avaliability,
                image: center.image
              };
            })
          ],
          status,
          message,
          center
        };
      }
      case 'MODIFY_CENTER_REJECTED': {
        const {
          status, message
        } = action.payload;
        return {
          ...state,
          status,
          message
        };
      }
      case 'GET_CENTERDETAILS': {
        return {
          ...state
        };
      }
      case 'GET_CENTERDETAILS_RESOLVED': {
        const {
          center
        } = action.payload.data;
        const { status, message } = action.payload;
        return {
          ...state,
          status,
          message,
          center
        };
      }
      case 'GET_CENTERDETAILS_REJECTED': {
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
