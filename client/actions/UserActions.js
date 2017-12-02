import axios from 'axios';
import { history } from '../routes';

const createUser = (userDetails) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_USER' });
    axios.post('http://localhost:8000/api/v1/users', userDetails)
      .then((res) => {
        dispatch({ type: 'FETCH_USER_RESOLVED', payload: res.data });
        localStorage.setItem('x-access-token', res.data.data.token);
        history.push('/events');
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_USER_REJECTED', payload: err });
        history.push('/');
      });
  };
};

const userLogin = (loginDetails) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_USER' });
    axios.post('http://localhost:8000/api/v1/users/login', loginDetails)
      .then((res) => {
        dispatch({ type: 'LOGIN_RESOLVED', payload: res.data });
        localStorage.setItem('x-access-token', res.data.data.token);
        history.push('/events');
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_REJECTED', payload: err.response.data });
        history.push('/');
      });
  };
};
const getCenters = allCenters => (dispatch) => {
  // dispatch({ type: 'ALL_CENTERS' });
  axios.get('http://localhost:8000/api/v1/centers', allCenters)
    .then((res) => {
      dispatch({ type: 'ALL_CENTERS_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'ALL_CENTERS_REJECTED', payload: err });
      history.push('/'); 
    });
};


export {
  createUser,
  userLogin,
  getCenters,
};
