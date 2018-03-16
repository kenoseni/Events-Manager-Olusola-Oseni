import axios from 'axios';

// Create User
const createUser = userDetails => (dispatch) => {
  dispatch({ type: 'SIGNUP_USER' });
  return axios.post('/api/v1/users', userDetails)
    .then((res) => {
      const { token } = res.data.data;
      localStorage.setItem('x-access-token', token);
      dispatch({ type: 'SIGNUP_USER_RESOLVED', payload: res.data });
      // history.push('/events');
      // this.context.router.push('/events');
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_USER_REJECTED', payload: err.response.data });
      // history.push('/');
    });
};
export {
  createUser,
};