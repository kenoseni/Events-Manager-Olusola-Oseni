import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar3 from './Navbar3';
import Event from './Event';
import FlashMessageList from './FlashMessageList';

class EventList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { events, messages, deleteFlashMessage} = this.props;
    return (
      <div style={{paddingTop: '60px'}}>
        <Navbar3 />
        <FlashMessageList messages={messages} deleteFlashMessage={deleteFlashMessage}  />
        {(events.length === 0) ? 
        <h1 style={{marginTop:'150px', paddingLeft: '300px'}}>No Events Created, Add an Event</h1> :
        events.map((event, i) => <Event {...this.props} key={event.id} i={i * -1} event={event} />)
        }
      </div>
    )
  }
}
EventList.propTypes = {
  events: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
}

export default EventList;
