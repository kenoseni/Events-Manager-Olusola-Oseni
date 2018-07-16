import axios from 'axios';

/**
* Get all event actions
*
* @method
* @param {object} page - The page query
* @param {object} res - The response object
* @return {object} All event action payload
* @memberof EventActions
*/
const allUserEvents = page => (dispatch) => {
  dispatch({
    type: 'ALL_USER_EVENT',
  });
  return axios({
    method: 'get',
    url: '/api/v1/events',
    params: { page },
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({ type: 'ALL_USER_EVENT_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: 'ALL_USER_EVENT_REJECTED',
        payload: err.response.data
      });
    });
};

/**
* Add Event action
*
* @method
* @param {object} eventInfo - Event details
* @param {object} res - The response object
* @return {object} Add event action payload
* @memberof EventActions
*/
const addEvent = eventInfo => (dispatch) => {
  dispatch({
    type: 'ADD_EVENT',
  });
  return axios({
    method: 'post',
    url: '/api/v1/events',
    data: eventInfo,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'ADD_EVENT_RESOLVED',
        payload: res.data
      });
      dispatch({
        type: 'CLEAR_ERROR_PROPS',
        payload: {}
      });
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_EVENT_REJECTED',
        payload: err.response.data
      });
    });
};

/**
* Delete event action
*
* @method
* @param {object} id - Event id
* @param {object} res - The response object
* @return {object} Delete event action payload
* @memberof EventActions
*/
const deleteEvent = id => (dispatch) => {
  dispatch({ type: 'DELETE_EVENT' });
  return axios({
    method: 'delete',
    url: `/api/v1/events/${id}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'DELETE_EVENT_RESOLVED',
        payload: res.data,
        id
      });
    })
    .catch((err) => {
      dispatch({
        type: 'DELETE_EVENT_REJECTED',
        payload: err.response.data
      });
    });
};

/**
* Modify Event action
*
* @method
* @param {object} eventInfo - Event details
* @param {object} id - Event id
* @param {object} res - The response object
* @return {object} Modify event action payload
* @memberof EventActions
*/
const modifyEvent = (eventInfo, id) => (dispatch) => {
  dispatch({ type: 'MODIFY_EVENT' });
  return axios({
    method: 'put',
    url: `/api/v1/events/${id}`,
    data: eventInfo,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({
        type: 'MODIFY_EVENT_RESOLVED',
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
        type: 'MODIFY_EVENT_REJECTED',
        payload: err.response.data
      });
    });
};

export {
  allUserEvents,
  addEvent,
  deleteEvent,
  modifyEvent
};
