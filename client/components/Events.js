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
    
    return (
      <div>
        <EventList  events={events} {...this.props}/>
      </div>
    )
  }
}
Events.propTypes = {
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
