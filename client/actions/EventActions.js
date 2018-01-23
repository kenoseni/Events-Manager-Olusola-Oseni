import axios from 'axios';
// import history from 'history';
export const getUserEvents = () => (dispatch) => {
  axios({
    method: 'get',
    url: `http://localhost:${process.env.PORT}/api/v1/events`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') }
  })
    .then((res) => {
      dispatch({ type: 'ALL_USER_EVENT_RESOLVED', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'ALL_USER_EVENT_REJECTED', payload: err.response.data });
    });
};
