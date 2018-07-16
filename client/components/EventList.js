import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './Navbar';
import Event from './Event';
import FlashMessageList from './FlashMessageList';

class EventList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      events,
      messages,
      deleteFlashMessage,
      match,
      location,
      searchForCenters
    } = this.props;
    return (
      <div style={{ paddingTop: '60px' }}>
        <NavBar
          home="Home"
          centers="Centers"
          events="Events"
          page="Events"
          admin="Admin"
          logout="Log Out"
          match={match}
          location={location}
          searchForCenters={searchForCenters}
        />
        {messages.length > 0 ? (
          <FlashMessageList
            messages={messages}
            deleteFlashMessage={deleteFlashMessage}
          />
        ) : null}
        <div id="eventcontainer" className="container">
          <div className="row">
            {events.length === 0 ? (
              <h1 style={{ marginTop: '150px', paddingLeft: '300px' }}>
                No Events Created, Add an Event
              </h1>
            ) : (
              events.map((event, i) => (
                <Event
                  {...this.props}
                  key={event.id}
                  i={i * -1}
                  event={event}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
EventList.propTypes = {
  events: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
};

export default EventList;
