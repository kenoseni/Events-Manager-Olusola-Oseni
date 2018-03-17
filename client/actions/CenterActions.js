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
export {
  getAllCenters
};
