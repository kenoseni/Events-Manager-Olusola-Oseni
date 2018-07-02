import shortid from 'shortid';

const uniqueId = shortid.generate();
/**
* Add flash message action
*
* @method
* @param {object} message - Flash message
* @return {object} Add flash message action payload
* @memberof FlashMessageActions
*/
const addFlashMessage = message => (dispatch) => {
  dispatch({
    type: 'ADD_FLASH_MESSAGE',
    message,
    id: uniqueId
  });
};

/**
* Delete flash message action
*
* @method
* @param {object} id - Flash message id
* @return {object} Action payload for delete flash message
* @memberof FlashMessageActions
*/
const deleteFlashMessage = id => (dispatch) => {
  dispatch({
    type: 'DELETE_FLASH_MESSAGE',
    id
  });
};

export {
  addFlashMessage,
  deleteFlashMessage,
  uniqueId
};
