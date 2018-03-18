import shortid from 'shortid';

const uniqueId = shortid.generate();

const addFlashMessage = message => (dispatch) => {
  dispatch({
    type: 'ADD_FLASH_MESSAGE',
    message,
    id: uniqueId
  });
};

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
