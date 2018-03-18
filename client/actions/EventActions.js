import axios from 'axios';

const allUserEvents = () => (dispatch) => {
  dispatch({
    type: 'ALL_USER_EVENT',
  });
  axios({
    method: 'get',
    url: '/api/v1/events',
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({ type: 'ALL_USER_EVENT_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: 'ALL_USER_EVENT_REJECTED',
        payload: err.response.data.data
      });
    });
};

const addEvent = eventInfo => (dispatch) => {
  dispatch({
    type: 'ADD_EVENT',
  });
  axios({
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
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_EVENT_REJECTED',
        payload: err.response.data.data
      });
    });
};

const deleteEvent = id => (dispatch) => {
  dispatch({ type: 'DELETE_EVENT' });
  axios({
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
        payload: err.response.data.data
      });
    });
};

const modifyEvent = (eventInfo, id) => (dispatch) => {
  dispatch({ type: 'MODIFY_EVENT' });
  axios({
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
    })
    .catch((err) => {
      dispatch({
        type: 'MODIFY_EVENT_REJECTED',
        payload: err.response.data.data
      });
    });
};

export {
  allUserEvents,
  addEvent,
  deleteEvent,
  modifyEvent
};
