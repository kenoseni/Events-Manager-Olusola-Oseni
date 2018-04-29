import axios from 'axios';

/**
* Add image action
*
* @method
* @param {object} imageData - Image details added to input
* @param {object} res - The response object
* @return {object} image action payload
* @memberof ImageActions
*/
const addImage = imageData => (dispatch) => {
  dispatch({ type: 'ADD_IMAGE' });
  return axios({
    url: 'https://api.cloudinary.com/v1_1/dxkqntr6a/image/upload',
    method: 'POST',
    transformRequest: [(data, headers) => {
      delete headers.common.Authorization;
      return data;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: imageData
  })
    .then((res) => {
      dispatch({
        type: 'ADD_IMAGE_RESOLVED',
        image: res.data.secure_url,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_IMAGE_REJECTED',
        payload: err
      });
    });
};

export default addImage;
