import axios from 'axios';
// import { history } from '../routes';

const getAllCenters = () => dispatch => axios({
  method: 'get',
  url: '/api/v1/centers',
})
  .then((res) => {
    dispatch({ type: 'ALL_CENTERS' });
    dispatch({ type: 'ALL_CENTERS_RESOLVED', payload: res.data });
  })
  .catch((err) => {
    dispatch({ type: 'ALL_CENTERS_REJECTED', payload: err });
    // history.push('/');
  });
const addCenter = centerInfo => (dispatch) => {
  dispatch({
    type: 'ADD_CENTER',
  });
  return axios({
    method: 'post',
    url: '/api/v1/centers',
    data: centerInfo,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'ADD_CENTER_RESOLVED',
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_CENTER_REJECTED',
        payload: err.response.data.data
      });
    });
};
const deleteCenter = id => (dispatch) => {
  dispatch({ type: 'DELETE_CENTER' });
  return axios({
    method: 'delete',
    url: `/api/v1/centers/${id}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'DELETE_CENTER_RESOLVED',
        payload: res.data,
        id
      });
    })
    .catch((err) => {
      dispatch({
        type: 'DELETE_CENTER_REJECTED',
        payload: err.response.data.data
      });
    });
};

const modifyCenter = (centerInfo, id) => (dispatch) => {
  dispatch({ type: 'MODIFY_CENTER' });
  return axios({
    method: 'put',
    url: `/api/v1/centers/${id}`,
    data: centerInfo,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'MODIFY_CENTER_RESOLVED',
        payload: res.data,
        id
      });
    })
    .catch((err) => {
      dispatch({
        type: 'MODIFY_CENTER_REJECTED',
        payload: err.response.data.data
      });
    });
};

const getOneCenter = id => (dispatch) => {
  dispatch({ type: 'GET_CENTERDETAILS' });
  return axios({
    method: 'get',
    url: `/api/v1/centers/${id}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'GET_CENTERDETAILS_RESOLVED',
        payload: res.data,
        id
      });
    })
    .catch((err) => {
      dispatch({
        type: 'GET_CENTERDETAILS_REJECTED',
        payload: err.response.data.data
      });
    });
};
export {
  getAllCenters,
  addCenter,
  deleteCenter,
  modifyCenter,
  getOneCenter
};
