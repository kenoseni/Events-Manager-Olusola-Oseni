import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router} from 'react-router-dom';
import  { Routes, history } from './routes';
import store from './store';
import './components/css/style2.css'

const app = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
  <Router history={history} >
	  <Routes />
  </Router>
</Provider>, app);
  