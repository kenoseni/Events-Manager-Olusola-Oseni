import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as eventActions from '../../actions/EventActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const eventDetails = {
  name: '',
  centerId: 1,
  date: '',
  time: '',
};

const eventPayload = {
  data: {
    data: {
      status: '',
      message: '',
      name: '',
      centerId: 1,
      date: '',
      time: '',
    }
  }
};

const deleteEventPayload = {
  data: {
    data: {
      status: '',
      message: ''
    }
  }
};

global.localStorage = {
  getItem: key => key
};

describe('event actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should get ALL_USER_EVENT_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: []
      });
    });
    const expectedActions = [
      { type: 'ALL_USER_EVENT' },
      { type: 'ALL_USER_EVENT_RESOLVED', payload: [] }
    ];
    // configure mock store
    const store = mockStore({ userEvents: {} });
    // call the allUserEvents async action creator
    return store.dispatch(eventActions.allUserEvents()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates ADD_EVENT_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: eventPayload
      });
    });
    const expectedActions = [
      { type: 'ADD_EVENT' },
      { type: 'ADD_EVENT_RESOLVED', payload: eventPayload },
      { type: 'CLEAR_ERROR_PROPS', payload: {} }
    ];
    // configure mock store
    const store = mockStore({ userEvents: {} });
    // call the addEvent async action creator
    return store.dispatch(eventActions.addEvent(eventDetails)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates DELETE_EVENT_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: deleteEventPayload
      });
    });
    const expectedActions = [
      { type: 'DELETE_EVENT' },
      { type: 'DELETE_EVENT_RESOLVED', payload: deleteEventPayload, id: 1 }
    ];
    // configure mock store
    const store = mockStore({ userEvents: {} });
    // call the deleteEvent async action creator
    return store.dispatch(eventActions.deleteEvent(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
