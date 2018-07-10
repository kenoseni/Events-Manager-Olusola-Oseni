import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as userActions from '../../actions/UserActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const signupDetails = {
  firstname: 'Angelina',
  lastname: 'King',
  email: 'aking@gmail.com',
  password: '1234567890'
};

const loginDetails = {
  email: 'aking@gmail.com',
  password: '1234567890'
};

const signupPayload = {
  data: {
    data: {
      status: '',
      message: '',
      firstname: 'Angelina',
      lastname: 'King',
      role: 'user',
      token: 'klmnopqrst'
    }
  }
};

const loginPayload = {
  data: {
    data: {
      status: '',
      message: '',
      token: 'klmnopqrst'
    }
  }

};

global.localStorage = {
  setItem: key => key,
  removeItem: key => key
};

describe('user signup action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates SIGNUP_USER_RESOLVED after successful signup', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: signupPayload
      });
    });
    const expectedActions = [
      { type: 'SIGNUP_USER' },
      { type: 'SET_CURRENT_USER', user: null },
      { type: 'SIGNUP_USER_RESOLVED', payload: signupPayload }
    ];
    // configure mock store
    const store = mockStore({ user: {} });
    // call the createUser async action creator
    return store.dispatch(userActions.createUser(signupDetails)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('user login action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates LOGIN_RESOLVED after successful signup', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: loginPayload
      });
    });
    const expectedActions = [
      { type: 'LOGIN_USER' },
      { type: 'SET_CURRENT_USER', user: null },
      { type: 'LOGIN_RESOLVED', payload: loginPayload }
    ];
    // configure mock store
    const store = mockStore({ user: {} });
    // call the createUser async action creator
    return store.dispatch(userActions.userLogin(loginDetails)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('user log out action', () => {
  it('signout users', () => {
    const expectedActions = [
      { type: 'SET_CURRENT_USER', user: {} },
    ];
    // configure mock store
    const store = mockStore({ user: {} });
    // call the signout sync action creator
    store.dispatch(userActions.signout());
    // return of sync action
    return expect(store.getActions()).toEqual(expectedActions);
  });
});
