import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';


/**
* User signup action
*
* @method
* @param {object} userDetails - The user sign up details
* @param {object} res - The response object
* @return {object} Sign Up action payload
* @memberof UserActions
*/
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

/**
* User Login action
*
* @method
* @param {object} loginDetails - The user sign in details
* @param {object} res - The response object
* @return {object} Login action payload
* @memberof UserActions
*/
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
      console.log("***", err.message, err.toString())
      dispatch({ type: 'LOGIN_REJECTED', payload: err.response.data });
    });
};
/**
* Upgrade user to admin action
*
* @method
* @param {number} id - Id of user to be upgraded
* @return {object} dispatch user property as empty onject
* @memberof UserActions
*/
const upgradeUserToAdmin = id => (dispatch) => {
  dispatch({ type: 'UPGRADING_USER' });
  return axios({
    method: 'put',
    url: `/api/v1/users/${id}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'UPGRADING_USER_RESOLVED',
        payload: res.data,
        id
      });
    })
    .catch((err) => {
      dispatch({
        type: 'UPGRADING_USER_REJECTED',
        payload: err.response.data
      });
    });
};

/**
* User Signout action
*
* @method
* @return {object} dispatch user property as empty onject
* @memberof UserActions
*/
const signout = () => (dispatch) => {
  localStorage.removeItem('x-access-token');
  setAuthorizationToken(false);
  dispatch({ type: 'SET_CURRENT_USER', user: {} });
};

/**
* Get all user action
*
* @method
* @param {object} page - The page query
* @param {object} res - The response object
* @return {object} all users action payload
* @memberof UserActions
*/
const getAllUsers = page => dispatch => axios({
  method: 'get',
  url: '/api/v1/users',
  params: { page },
  headers: { 'x-access-token': localStorage.getItem('x-access-token') }
})
  .then((res) => {
    dispatch({ type: 'GET_USERS' });
    dispatch({
      type: 'GET_USERS_RESOLVED',
      payload: res.data,
    });
  })
  .catch((err) => {
    dispatch({
      type: 'GET_USERS_REJECTED',
      payload: err.response.data.data
    });
  });

export {
  createUser,
  userLogin,
  upgradeUserToAdmin,
  signout,
  getAllUsers
};
