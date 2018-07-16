import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteModal from './DeleteModal';
import ModifyEvent from './ModifyEvent';

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event, i } = this.props;
    const { id } = this.props.event;
    const center = this.props.eventCenters.allCenters.filter(
      center => center.id === event.centerId
    );
    const [centerName] = center;
    return (
      <div className="col-md-4">
        <div className="card" id="event">
          <div className="card-header indigo lighten-1 text-center white-text">
            <h4>{event.name.toUpperCase()}</h4>
          </div>
          <div className="card-body">
            <p className="card-text font-weight-bold">
              Location: {centerName ? centerName.name.toUpperCase() : null}
            </p>
            <p className="card-text font-weight-bold">
              Address: {centerName ? centerName.location : null}
            </p>
            <p className="card-text font-weight-bold">
              Start Date: {event.startDate}
            </p>
            <p className="card-text font-weight-bold">
              End Date: {event.endDate}
            </p>
            <p className="card-text font-weight-bold">Time: {event.time}</p>
          </div>
          <div className="card-footer bg-transparent">
            <ul className="nav">
              <li id="modify">
                <button
                  id="modifyevent"
                  data-toggle="modal"
                  data-target={`#${id}`}
                >
                  <i
                    className="fa fa-pencil-square-o fa-lg nav-link"
                    aria-hidden="true"
                  />
                </button>
              </li>
              <li id="delete">
                <button
                  id="deleteevent"
                  data-toggle="modal"
                  data-target={`#${i}`}
                >
                  <i
                    className="fa fa-trash-o float-right fa-lg nav-link"
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ModifyEvent
          title="MODIFY EVENT"
          i={i}
          id={id}
          event={event}
          {...this.props}
        />
        <DeleteModal
          title={`Are you sure you want to delete ${event.name} event?`}
          i={i}
          id={id}
          event={event}
          {...this.props}
        />
      </div>
    );
  }
}
Event.propTypes = {
  i: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired
};
export default Event;
