import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Event from './Event';
import FlashMessageList from './FlashMessageList';

class EventList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { events, messages, deleteFlashMessage, match, location} = this.props;
    return (
      <div style={{paddingTop: '60px'}}>
        <NavBar home='Home' centers='Centers' 
          events='Events' page='Events' 
          logout='Log Out' match={match} 
          location={location} 
        />
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
