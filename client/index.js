import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from 'react-router-dom';
import  { Routes, history } from './routes';
import SignUp from './components/SignUp';
import Eventcenters from './components/Eventcenters';
import AllEvents from './components/AllEvents';
import store from './store';

const app = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
    <Router history={history} >
	    <Routes />
    </Router>
</Provider>, app);
  