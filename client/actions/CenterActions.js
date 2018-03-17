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
export {
  getAllCenters,
  addCenter
};
