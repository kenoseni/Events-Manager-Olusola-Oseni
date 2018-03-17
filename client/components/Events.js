import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as eventActions from '../actions/EventActions';
import * as centerActions  from '../actions/CenterActions'
import * as userActions  from '../actions/UserActions';
import { userEvents } from '../reducers/';
import { eventCenters } from '../reducers/';
import EventList from './EventList';
import AddEventModalButton from './AddEventModalButton';
import AddEvent from './AddEvent'

class Events extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.allUserEvents();
    this.props.getAllCenters()
  }

  render() {
    const { events } = this.props.userEvents;
    const { addEvent, deleteEvent } = this.props;
    
    return (
      <div>
        <EventList events={events} deleteEvent={deleteEvent} {...this.props}/>
        <AddEventModalButton />
        <AddEvent title={'ADD EVENT'} addEvent={addEvent} {...this.props} />
      </div>
    )
  }
}
Events.propTypes = {
  addEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  eventCenters: PropTypes.object.isRequired,
  userEvents: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  userEvents: state.userEvents,
  eventCenters: state.eventCenters,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { ...eventActions, 
    ...centerActions, 
    ...userActions,
  }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Events);
