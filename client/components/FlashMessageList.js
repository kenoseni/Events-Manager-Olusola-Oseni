import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';

class FlashMessageList extends Component {
  render () {
    const { messages, deleteFlashMessage } = this.props 
    return (
      <div>
        {
          (messages.length > 0) ? messages.map((message, i) => <FlashMessage key={message.id} i={i} deleteFlashMessage={deleteFlashMessage} message={message} />) : null
        }
      </div>
    )
  }
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessageList;