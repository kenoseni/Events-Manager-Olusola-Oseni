import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import addImage from '../actions/ImageActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const imageDetails = {
  file: '',
  upload_preset: ''
};

const imagePayload = {
  image: undefined
};

describe('image upload action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates ADD_IMAGE_RESOLVED after successful upload', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: imagePayload
      });
    });
    const expectedActions = [
      { type: 'ADD_IMAGE' },
      { type: 'ADD_IMAGE_RESOLVED' }
    ];
    // configure mock store
    const store = mockStore({ image: {} });
    // call the addImage async action creator
    return store.dispatch(addImage(imageDetails)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
