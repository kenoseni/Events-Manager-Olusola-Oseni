import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { addFlashMessage,
  deleteFlashMessage, uniqueId } from '../../actions/FlashMessageActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const message = {
  type: '',
  text: ''
};

describe('flash message action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates ADD_FLASH_MESSAGE after successful signup', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: message
      });
    });
    const expectedActions = [
      { type: 'ADD_FLASH_MESSAGE', message, id: uniqueId }
    ];
    // configure mock store
    const store = mockStore({ flashMessage: [] });
    // call the addFlashMessage action creator
    store.dispatch(addFlashMessage(message));
    return expect(store.getActions()).toEqual(expectedActions);
  });
  it('invokes DELETE_FLASH_MESSAGE after user cancel flash message', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: []
      });
    });
    const expectedActions = [
      { type: 'DELETE_FLASH_MESSAGE', id: uniqueId }
    ];
    // configure mock store
    const store = mockStore({ flashMessage: [] });
    // call the addFlashMessage action creator
    store.dispatch(deleteFlashMessage(uniqueId));
    return expect(store.getActions()).toEqual(expectedActions);
  });
});
