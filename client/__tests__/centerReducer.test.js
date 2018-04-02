import expect from 'expect';
import reducer from '../reducers/CenterReducer';

const initialState = {
  center: {},
  centers: [],
  message: '',
  status: ''
};

describe('center Reducer', () => {
  it('should return the initial state', () => {
    const results = reducer.eventCenters(undefined, {});
    expect(results).toEqual(initialState);
  });
  it('should handle ALL_CENTERS', () => {
    const state = initialState;
    const action = {
      type: 'ALL_CENTERS',
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle ALL_CENTERS_RESOLVED', () => {
    const state = initialState;
    const action = {
      type: 'ALL_CENTERS_RESOLVED',
      payload: {
        centers: [],
        message: 'These are your centers',
        status: 'Success'
      }
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      center: {},
      centers: [],
      message: 'These are your centers',
      status: 'Success'
    });
  });
  it('should handle ALL_CENTERS_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'ALL_CENTERS_REJECTED',
      payload: {
        status: 'Fail',
        message: ''
      }
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      center: {},
      centers: [],
      message: '',
      status: 'Fail'
    });
  });
  it('should handle ADD_CENTER', () => {
    const state = initialState;
    const action = {
      type: 'ADD_CENTER',
      payload: {}
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle ADD_CENTER_RESOLVED', () => {
    const state = initialState;
    const action = {
      type: 'ADD_CENTER_RESOLVED',
      payload: {
        data: {
          center: {
            price: '',
            image: '',
            capacity: 500,
            description: '',
            facilities: '',
            id: 1,
            location: '',
            name: '',
            avaliability: true
          },
          status: 'Success',
          message: 'Center created successfully'
        }
      }
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      ...initialState,
      center: {},
      centers: [
        ...initialState.centers,
        {
          id: 1,
          name: '',
          description: '',
          location: '',
          price: '',
          facilities: '',
          image: '',
          capacity: 500,
          avaliability: true
        }
      ],
      status: 'Success',
      message: 'Center created successfully'
    });
  });
  it('should handle ADD_CENTER_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'ADD_CENTER_REJECTED',
      payload: {
        status: 'Fail',
        message: 'No center added'
      }
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      ...initialState,
      status: 'Fail',
      message: 'No center added'
    });
  });
  it('should handle DELETE_CENTER', () => {
    const state = initialState;
    const action = {
      type: 'DELETE_CENTER',
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle DELETE_CENTER_RESOLVED', () => {
    const state = {
      center: {},
      centers: [
        {
          id: 1,
          name: '',
          description: '',
          location: '',
          price: '',
          facilities: '',
          image: '',
          capacity: 500
        }
      ],
      status: '',
      message: ''
    };
    const action = {
      type: 'DELETE_CENTER_RESOLVED',
      payload: {
        data: {
          status: 'Success',
          message: 'Event has been successfully deleted'
        }
      },
      id: 1
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      center: {},
      centers: [],
      status: 'Success',
      message: 'Event has been successfully deleted'
    });
  });
  it('should handle DELETE_CENTER_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'DELETE_CENTER_REJECTED',
      payload: {
        status: 'Fail',
        message: 'No center deleted'
      }
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      ...initialState,
      status: 'Fail',
      message: 'No center deleted'
    });
  });
  it('should handle MODIFY_CENTER', () => {
    const state = initialState;
    const action = {
      type: 'MODIFY_CENTER',
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle MODIFY_CENTER_RESOLVED', () => {
    const state = {
      center: {},
      centers: [
        {
          id: 3,
          name: '',
          description: '',
          location: '',
          price: '',
          facilities: '',
          capacity: 500,
          avaliability: true
        }
      ],
    };
    const action = {
      type: 'MODIFY_CENTER_RESOLVED',
      payload: {
        data: {
          center: {
            id: 3,
            name: '',
            description: '',
            location: '',
            price: '',
            facilities: '',
            capacity: 1000,
            avaliability: false
          },
          status: 'Success',
          message: 'Center updated'
        }
      },
      id: 3
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      ...initialState,
      center: {
        id: 3,
        name: '',
        description: '',
        location: '',
        price: '',
        facilities: '',
        capacity: 1000,
        avaliability: false
      },
      centers: [
        ...initialState.centers,
        {
          id: 3,
          name: '',
          description: '',
          location: '',
          price: '',
          facilities: '',
          capacity: 1000,
          avaliability: false
        }
      ],
      status: 'Success',
      message: 'Center updated'
    });
  });
  it('should handle MODIFY_CENTER_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'MODIFY_CENTER_REJECTED',
      payload: {
        status: 'Fail',
        message: ''
      }
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      ...initialState,
      status: 'Fail',
      message: ''
    });
  });
  it('should handle GET_CENTERDETAILS_RESOLVED', () => {
    const state = {
      center: {},
      centers: [
        {
          id: 3,
          name: '',
          description: '',
          location: '',
          price: '',
          facilities: '',
          image: '',
          capacity: 1000,
          avaliability: false
        }
      ],
      message: '',
      status: ''
    };
    const action = {
      type: 'GET_CENTERDETAILS_RESOLVED',
      payload: {
        data: {
          center: {
            id: 3,
            name: '',
            description: '',
            location: '',
            price: '',
            facilities: '',
            image: '',
            capacity: 1000,
            avaliability: false,
            events: []
          },
          status: 'Success',
          message: 'List of one center'
        }
      },
      id: 3
    };
    const results = reducer.eventCenters(state, action);
    expect(results).toEqual({
      ...initialState,
      center: {
        id: 3,
        name: '',
        description: '',
        location: '',
        price: '',
        facilities: '',
        image: '',
        capacity: 1000,
        avaliability: false,
        events: []
      },
      centers: [
        {
          id: 3,
          name: '',
          description: '',
          location: '',
          price: '',
          facilities: '',
          image: '',
          capacity: 1000,
          avaliability: false
        }
      ],
      status: 'Success',
      message: 'List of one center'
    });
  });
});
