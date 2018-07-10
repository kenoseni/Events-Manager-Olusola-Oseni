import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as eventActions from '../actions/EventActions';
import * as centerActions  from '../actions/CenterActions'
import * as userActions  from '../actions/UserActions';
import { deleteFlashMessage }  from '.././actions/FlashMessageActions';
import { userEvents } from '../reducers/';
import { eventCenters } from '../reducers/';
import EventList from './EventList';
import AddEventModalButton from './AddEventModalButton';
import AddEvent from './AddEvent';
import flashMessage from '../reducers'
import Pages from './Pages';


export class Events extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const page = this.props.history.location.search.split('=')[1];
    this.props.allUserEvents(page);
    this.props.getAllCenters()
  }
  render() {
    const { events, count, limit } = this.props.userEvents;
    const { addEvent,
       deleteEvent,
       modifyEvent,
       messages,
       deleteFlashMessage,
       history
     } = this.props;
    
    return (
      <div>
        <EventList events={events}
         deleteEvent={deleteEvent}
         modifyEvent={modifyEvent}
         messages={messages}
         deleteFlashMessage={deleteFlashMessage}
         {...this.props}
        />
        <AddEventModalButton />
        <AddEvent title={'ADD EVENT'} addEvent={addEvent} {...this.props} />
        {count !== undefined && <Pages count={count} history={history} limit={limit} />}
      </div>
    )
  }
}
Events.propTypes = {
  addEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  modifyEvent: PropTypes.func.isRequired,
  eventCenters: PropTypes.object.isRequired,
  userEvents: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  userEvents: state.userEvents,
  eventCenters: state.eventCenters,
  messages: state.flashMessage
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { ...eventActions, 
    ...centerActions, 
    ...userActions,
    deleteFlashMessage
  }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Events);
