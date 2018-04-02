import expect from 'expect';
import reducer from '../reducers/ImageReducer';

const initialState = {};

describe('image Reducer', () => {
  it('should return the initial state', () => {
    const results = reducer(undefined, {});
    expect(results).toEqual(initialState);
  });
  it('should handle ADD_IMAGE', () => {
    const state = initialState;
    const action = {
      type: 'ADD_IMAGE',
    };
    const results = reducer(state, action);
    expect(results).toEqual({
      ...state
    });
  });
  it('should handle ADD_IMAGE_RESOLVED', () => {
    const state = initialState;
    const action = {
      type: 'ADD_IMAGE_RESOLVED',
      image: ''
    };
    const results = reducer(state, action);
    expect(results).toEqual({
      ...state,
      image: action.image
    });
  });
});
