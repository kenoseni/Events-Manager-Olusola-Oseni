import expect from 'expect';
import reducer from '../../reducers/UserReducer';

const initialState = {};

describe('user Reducer', () => {
  it('should return the initial state', () => {
    const results = reducer.user(undefined, {});
    expect(results).toEqual(initialState);
  });
  it('should handle SIGNUP_USER', () => {
    const state = initialState;
    const action = {
      type: 'SIGNUP_USER',
    };
    const results = reducer.user(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle SIGNUP_USER_RESOLVED', () => {
    const state = initialState;
    const action = {
      type: 'SIGNUP_USER_RESOLVED',
      payload: {
        data: {
          firstname: 'Olusola',
          lastname: 'Oseni',
          role: 'user',
          token: 'abcde'
        },
        status: 'Success',
        message: 'User successfully signed up',
      }
    };
    const results = reducer.user(state, action);
    expect(results).toEqual({
      ...state,
      status: 'Success',
      message: 'User successfully signed up',
      firstname: 'Olusola',
      lastname: 'Oseni',
      role: 'user',
      token: 'abcde',
    });
  });
  it('should handle SIGNUP_USER_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'SIGNUP_USER_REJECTED',
      payload: {
        status: 'Fail',
        message: ''
      }
    };
    const results = reducer.user(state, action);
    expect(results).toEqual({
      ...state,
      error: {
        status: 'Fail',
        message: ''
      }
    });
  });
  it('should handle LOGIN_USER', () => {
    const state = initialState;
    const action = {
      type: 'LOGIN_USER',
    };
    const results = reducer.user(state, action);
    expect(results).toEqual(initialState);
  });
  it('should handle LOGIN_RESOLVED', () => {
    const state = initialState;
    const action = {
      type: 'LOGIN_RESOLVED',
      payload: {
        data: {
          token: 'efghi'
        },
        status: 'Success',
        message: 'User successfully logged in'
      }
    };
    const results = reducer.user(state, action);
    expect(results).toEqual({
      ...state,
      status: 'Success',
      message: 'User successfully logged in',
      token: 'efghi'
    });
  });
  it('should handle LOGIN_REJECTED', () => {
    const state = initialState;
    const action = {
      type: 'LOGIN_REJECTED',
      payload: {
        status: 'Fail',
        message: ''
      }
    };
    const results = reducer.user(state, action);
    expect(results).toEqual({
      ...state,
      error: {
        status: 'Fail',
        message: ''
      }
    });
  });
});
