import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';

// Create User
const createUser = userDetails => (dispatch) => {
  dispatch({ type: 'SIGNUP_USER' });
  return axios.post('/api/v1/users', userDetails)
    .then((res) => {
      const { token } = res.data.data;
      localStorage.setItem('x-access-token', token);
      setAuthorizationToken(token);
      dispatch({ type: 'SET_CURRENT_USER', user: jwt.decode(token) });
      dispatch({ type: 'SIGNUP_USER_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_USER_REJECTED', payload: err.response.data });
    });
};

// User Login action
const userLogin = loginDetails => (dispatch) => {
  dispatch({ type: 'LOGIN_USER' });
  return axios.post('/api/v1/users/login', loginDetails)
    .then((res) => {
      const { token } = res.data.data;
      localStorage.setItem('x-access-token', token);
      setAuthorizationToken(token);
      dispatch({ type: 'SET_CURRENT_USER', user: jwt.decode(token) });
      dispatch({ type: 'LOGIN_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_REJECTED', payload: err.response.data });
    });
};

const signout = () => (dispatch) => {
  localStorage.removeItem('x-access-token');
  setAuthorizationToken(false);
  dispatch({ type: 'SET_CURRENT_USER', user: {} });
};
export {
  createUser,
  userLogin,
  signout
};
