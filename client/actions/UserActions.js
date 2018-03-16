import axios from 'axios';

// Create User
const createUser = userDetails => (dispatch) => {
  dispatch({ type: 'SIGNUP_USER' });
  return axios.post('/api/v1/users', userDetails)
    .then((res) => {
      const { token } = res.data.data;
      localStorage.setItem('x-access-token', token);
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
      dispatch({ type: 'LOGIN_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_REJECTED', payload: err.response.data });
    });
};
export {
  createUser,
  userLogin
};
