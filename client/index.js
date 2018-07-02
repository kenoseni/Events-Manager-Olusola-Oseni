import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import  { Routes, history } from './routes';
import store from './store';
import setAuthorizationToken from './utils/setAuthorizationToken';
import './scss/style2.scss'
// import './components/css/style2.css'


const app = document.getElementById('root')

if (localStorage['x-access-token']) {
  setAuthorizationToken(localStorage['x-access-token']);
  store.dispatch({ type: 'SET_CURRENT_USER', user: jwtDecode(localStorage['x-access-token']) });
}

ReactDOM.render(<Provider store={store}>
  <Router history={history} >
	  <Routes />
  </Router>
</Provider>, app);
  