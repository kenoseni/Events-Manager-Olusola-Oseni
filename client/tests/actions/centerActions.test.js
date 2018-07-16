import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as centerActions from '../../actions/CenterActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const centerDetails = {
  name: '',
  description: '',
  location: '',
  price: '',
  image: 'image',
  facilities: '',
  capacity: 500
};
const modifyCenterDetails = {
  id: 1,
  name: '',
  description: '',
  location: '',
  address: '',
  capacity: 500
};

const centerPayload = {
  data: {
    data: {
      status: '',
      message: '',
      name: '',
      description: '',
      location: '',
      price: '',
      image: 'image',
      facilities: '',
      capacity: 500
    }
  }
};

const searchPayload = {
  data: {
    data: {
      count: 1,
      limit: 6,
      searchedCenters: []
    }
  }
};

const modifyCenterPayload = {
  data: {
    data: {
      status: '',
      message: '',
      name: '',
      description: '',
      location: '',
      price: '',
      capacity: 2000,
      avaliability: true
    }
  }
};
const deleteCenterPayload = {
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

describe('center actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should get ALL_CENTERS_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: []
      });
    });
    const expectedActions = [
      { type: 'ALL_CENTERS' },
      { type: 'ALL_CENTERS_RESOLVED', payload: [] }
    ];
    // configure mock store
    const store = mockStore({ eventCenters: {} });
    // call the addCenter async action creator
    return store.dispatch(centerActions.getAllCenters()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates ADD_CENTER_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: centerPayload
      });
    });
    const expectedActions = [
      { type: 'ADD_CENTER' },
      { type: 'ADD_CENTER_RESOLVED', payload: centerPayload },
      { type: 'CLEAR_ERROR_PROPS', payload: {} }
    ];
    // configure mock store
    const store = mockStore({ eventCenters: {} });
    // call the addCenter async action creator
    return store.dispatch(centerActions.addCenter(centerDetails)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates MODIFY_CENTER_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: modifyCenterPayload
      });
    });
    const expectedActions = [
      { type: 'MODIFY_CENTER' },
      { type: 'MODIFY_CENTER_RESOLVED', payload: modifyCenterPayload, id: 1 },
      { type: 'CLEAR_ERROR_PROPS', payload: {} }
    ];
    // configure mock store
    const store = mockStore({ eventCenters: {} });
    // call the addCenter async action creator
    return store
      .dispatch(centerActions.modifyCenter(modifyCenterDetails, 1))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('creates GET_CENTERDETAILS_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: centerPayload
      });
    });
    const expectedActions = [
      { type: 'GET_CENTERDETAILS' },
      { type: 'GET_CENTERDETAILS_RESOLVED', payload: centerPayload, id: 1 }
    ];
    // configure mock store
    const store = mockStore({ eventCenters: {} });
    // call the addCenter async action creator
    return store.dispatch(centerActions.getOneCenter(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates DELETE_CENTER_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: deleteCenterPayload
      });
    });
    const expectedActions = [
      { type: 'DELETE_CENTER' },
      { type: 'DELETE_CENTER_RESOLVED', payload: deleteCenterPayload, id: 1 }
    ];
    // configure mock store
    const store = mockStore({ eventCenters: {} });
    // call the addCenter async action creator
    return store.dispatch(centerActions.deleteCenter(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates SEARCH_CENTERS_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: searchPayload
      });
    });
    const expectedActions = [
      { type: 'SEARCH_CENTERS' },
      { type: 'SEARCH_CENTERS_RESOLVED', payload: searchPayload }
    ];
    // configure mock store
    const store = mockStore({ eventCenters: {} });
    // call the addCenter async action creator
    return store.dispatch(centerActions.searchForCenters({})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates PAGE_CENTERS_RESOLVED', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: searchPayload
      });
    });
    const expectedActions = [
      { type: 'PAGE_CENTERS' },
      { type: 'PAGE_CENTERS_RESOLVED', payload: searchPayload }
    ];
    // configure mock store
    const store = mockStore({ eventCenters: {} });
    // call the addCenter async action creator
    return store.dispatch(centerActions.getCenters({})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
