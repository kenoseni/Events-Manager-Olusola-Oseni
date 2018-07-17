import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// importing the root reducer
import reducer from './reducers';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, composeWithDevTools(middleware));

export default store;
