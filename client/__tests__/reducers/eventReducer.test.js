import expect from 'expect';
import reducer from '../../reducers/EventReducer';

const initialState = {
  status: '',
  message: '',
  events: [],
  event: {}
};

describe('event Reducer', () => {
  it('should return the initial state', () => {
    const results = reducer.userEvents(undefined, {});
    expect(results).toEqual(initialState);
  });
  it('should handle ALL_USER_EVENT', () => {
    const state = initialState;
    const action = {
      type: 'ALL_CENTERS',
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle ALL_USER_EVENT_RESOLVED', () => {
    const state = initialState;
    const action = {
      type: 'ALL_USER_EVENT_RESOLVED',
      payload: {
        data: {
          events: [],
          count: 6,
          limit: 6
        },
        message: 'These are your events',
        status: 'Success'
      }
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual({
      event: {},
      events: [],
      count: 6,
      limit: 6,
      message: 'These are your events',
      status: 'Success'
    });
  });
  it('should handle ALL_USER_EVENT_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'ALL_USER_EVENT_REJECTED',
      payload: {
        status: 'Fail',
        message: ''
      }
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual({
      event: {},
      events: [],
      message: '',
      status: 'Fail'
    });
  });
  it('should handle ADD_EVENT', () => {
    const state = initialState;
    const action = {
      type: 'ADD_EVENT',
      payload: {}
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle ADD_EVENT_RESOLVED', () => {
    const state = initialState;
    const action = {
      type: 'ADD_EVENT_RESOLVED',
      payload: {
        data: {
          event: {
            id: 1,
            name: '',
            centerId: 1,
            startDate: '',
            endDate: '',
            time: '',
          },
        },
        status: 'Success',
        message: 'Event created successfully'
      }
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual({
      ...initialState,
      event: {},
      events: [
        ...initialState.events,
        {
          id: 1,
          name: '',
          centerId: 1,
          startDate: '',
          endDate: '',
          time: '',
        }
      ],
      status: 'Success',
      message: 'Event created successfully'
    });
  });
  it('should handle ADD_EVENT_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'ADD_EVENT_REJECTED',
      payload: {
        status: 'Fail',
        message: 'No event added'
      }
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual({
      ...initialState,
      status: 'Fail',
      message: 'No event added'
    });
  });
  it('should handle DELETE_EVENT', () => {
    const state = initialState;
    const action = {
      type: 'DELETE_EVENT',
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle DELETE_EVENT_RESOLVED', () => {
    const state = {
      event: {},
      events: [
        {
          id: 1,
          name: '',
          centerId: 1,
          date: '',
          time: '',
        }
      ],
      status: '',
      message: ''
    };
    const action = {
      type: 'DELETE_EVENT_RESOLVED',
      payload: {
        status: 'Success',
        message: 'Event has been successfully deleted'
      },
      id: 1
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual({
      event: {},
      events: [],
      status: 'Success',
      message: 'Event has been successfully deleted'
    });
  });
  it('should handle DELETE_EVENT_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'DELETE_EVENT_REJECTED',
      payload: {
        status: 'Fail',
        message: 'No event deleted'
      }
    };
    const results = reducer.userEvents(state, action);
    expect(results).toEqual({
      ...initialState,
      status: 'Fail',
      message: 'No event deleted'
    });
  });
});
