import expect from 'expect';
import reducer from '../../reducers/FlashMessageReducer';

const initialState = [];

describe('flash message Reducer', () => {
  it('should return the initial state', () => {
    const results = reducer(undefined, {});
    expect(results).toEqual(initialState);
  });
  it('should handle ADD_FLASH_MESSAGE', () => {
    const state = initialState;
    const action = {
      type: 'ADD_FLASH_MESSAGE',
      message: {
        type: 'success',
        text: 'user successfully signed up'
      }
    };
    const results = reducer(state, action);
    expect(results).toEqual([
      ...state,
      {
        id: action.id,
        type: action.message.type,
        text: action.message.text
      }
    ]);
  });
  it('should handle DELETE_FLASH_MESSAGE', () => {
    const state = [
      {
        id: 1,
        type: 'success',
        text: 'user successfully signed up'
      }
    ];
    const action = {
      type: 'DELETE_FLASH_MESSAGE',
      id: 1
    };
    const results = reducer(state, action);
    expect(results).toEqual(initialState);
  });
});
