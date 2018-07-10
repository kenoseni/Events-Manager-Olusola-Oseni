import expect from 'expect';
import reducer from '../../reducers/AuthReducer';

const initialState = {
  isAuthenticated: false,
  user: {}
};

describe('Authentication Reducer', () => {
  it('should return the initial state', () => {
    const results = reducer(undefined, {});
    expect(results).toEqual(initialState);
  });
  it('should handle SET_CURRENT_USER', () => {
    const state = initialState;
    const action = {
      type: 'SET_CURRENT_USER',
      user: { token: 'abcde' }
    };
    const results = reducer(state, action);
    expect(results).toEqual({
      ...state,
      isAuthenticated: true,
      user: { token: 'abcde' }
    });
  });
});
