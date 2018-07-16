import axios from 'axios';
// import { history } from '../routes';

/**
 * Get centers action
 *
 * @method
 * @param {object} page - The page query
 * @param {object} res - The response object
 * @return {object} All centers action payload
 * @memberof CenterActions
 */
const getCenters = page => dispatch =>
  axios({
    method: 'get',
    url: '/api/v1/centers',
    params: { page }
  })
    .then((res) => {
      dispatch({ type: 'PAGE_CENTERS' });
      dispatch({ type: 'PAGE_CENTERS_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'PAGE_CENTERS_REJECTED', payload: err });
      // history.push('/');
    });

/**
 * Get all centers action
 *
 * @method
 * @param {object} res - The response object
 * @return {object} All centers action payload
 * @memberof CenterActions
 */
const getAllCenters = () => dispatch =>
  axios({
    method: 'get',
    url: '/api/v1/admin/centers',
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({ type: 'ALL_CENTERS' });
      dispatch({
        type: 'ALL_CENTERS_RESOLVED',
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: 'ALL_CENTERS_REJECTED',
        payload: err.respose.data
      });
    });

/**
 * Search center action
 *
 * @method
 * @param {object} searchParameter - The search body
 * @param {object} res - The response object
 * @return {object} All centers action payload
 * @memberof CenterActions
 */
const searchForCenters = searchParameter => (dispatch) => {
  dispatch({
    type: 'SEARCH_CENTERS'
  });
  return axios({
    method: 'post',
    url: '/api/v1/search',
    data: searchParameter
  })
    .then((res) => {
      dispatch({
        type: 'SEARCH_CENTERS_RESOLVED',
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: 'SEARCH_CENTERS_REJECTED',
        payload: err.response.data
      });
    });
};

/**
 * Add center action
 *
 * @method
 * @param {object} centerInfo - Event details
 * @param {object} res - The response object
 * @return {object} Add center action payload
 * @memberof EventActions
 */
const addCenter = centerInfo => (dispatch) => {
  dispatch({
    type: 'ADD_CENTER'
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
      dispatch({
        type: 'CLEAR_ERROR_PROPS',
        payload: {}
      });
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_CENTER_REJECTED',
        payload: err.response.data
      });
    });
};

/**
 * Delete center action
 *
 * @method
 * @param {object} id - Center id
 * @param {object} res - The response object
 * @return {object} Delete center action payload
 * @memberof CenterActions
 */
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

/**
 * Modify center action
 *
 * @method
 * @param {object} centerInfo - Center details
 * @param {object} id - Center id
 * @param {object} res - The response object
 * @return {object} Modify center action payload
 * @memberof EventActions
 */
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
      dispatch({
        type: 'CLEAR_ERROR_PROPS',
        payload: {}
      });
    })
    .catch((err) => {
      dispatch({
        type: 'MODIFY_CENTER_REJECTED',
        payload: err.response.data
      });
    });
};

/**
 * Get one center action
 *
 * @method
 * @param {object} id - Center id
 * @param {object} res - The response object
 * @return {object} Get one center action payload
 * @memberof CenterActions
 */
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
  getCenters,
  addCenter,
  deleteCenter,
  modifyCenter,
  getOneCenter,
  searchForCenters,
  getAllCenters
};
