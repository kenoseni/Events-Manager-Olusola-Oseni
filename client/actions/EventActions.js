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

export {
  allUserEvents,
};
