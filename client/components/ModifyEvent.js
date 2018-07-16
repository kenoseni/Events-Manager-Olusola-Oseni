import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import * as centerActions from '../actions/CenterActions';
import { getCenters } from '../actions/CenterActions';
import { validateEventInput } from './Validations';

class ModifyEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        ...this.props.event,
        centerId: `${this.props.event.centerId}`
      },
      allCenters: this.props.eventCenters.allCenters,
      error: {}
    };

    this.submit = this.submit.bind(this);
    this.getInput = this.getInput.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ allCenters: nextProps.eventCenters.allCenters });
  }

  isValid() {
    const { error, isValid } = validateEventInput(this.state);
    if (!isValid) {
      this.setState({ error });
    }
    return isValid;
  }

  getInput(e) {
    this.setState({
      event: {
        ...this.state.event,
        [e.target.name]: e.target.value
      }
    });
  }

  modifyUserEvent() {
    const { name, centerId, startDate, endDate, time, id } = this.state.event;
    if (this.isValid()) {
      this.props
        .modifyEvent(
          {
            name,
            centerId,
            startDate,
            endDate,
            time
          },
          id
        )
        .then(() => {
          if (this.props.userEvents.error.message !== undefined) {
            this.setState({ error: this.props.userEvents.error });
          } else {
            $(`#${id}`).modal('hide');
            this.props.history.push('/events');
          }
        });
    }
  }

  submit(e) {
    e.preventDefault();
    this.setState({ error: {} });
    this.modifyUserEvent();
  }

  render() {
    const { event, i, allCenters, error } = this.state;
    const { id } = this.props;
    const center = allCenters.filter(center => center.id === event.centerId);
    const [centerName] = center;
    return (
      <div>
        <div className="container modify-event-height">
          {/*<!-- Add Events Modal -->*/}
          <div className="modal fade right" id={`${id}`} role="dialog">
            <div className="modal-dialog modal-full-height modal-right">
              {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div id="modifyEventModal" className="modal-header">
                  <h4
                    id="modifyEventTitle"
                    className="modal-title text-center font-weight-bold"
                  >
                    {this.props.title}
                  </h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form action="" method="" role="form" onSubmit={this.submit}>
                    <div className="">
                      <div className="">
                        <div className="">
                          <div className="input-group mb-3" />
                        </div>
                      </div>
                      {error.message && (
                        <div className="alert alert-danger">
                          {error.message}
                        </div>
                      )}
                      <div className="">
                        <div className="container-fluid">
                          <div className="row">
                            <div id="modifyEventForm" className="col-12">
                              <span className="" id="sizing-addon1">
                                Event Name:
                              </span>
                              <input
                                type="text"
                                name="name"
                                id="eventname"
                                value={
                                  event.name ? event.name.toUpperCase() : ''
                                }
                                onChange={this.getInput}
                                className="form-control"
                                aria-describedby="sizing-addon1"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">
                                  Venue
                                </span>
                                <select
                                  id="eventlocation"
                                  className="form-control"
                                  name="centerId"
                                  onChange={this.getInput}
                                  value={event.centerId}
                                >
                                  <option>select option</option>
                                  {allCenters.map(center => (
                                    <option
                                      id="choosecenter"
                                      key={center.id}
                                      value={center.id}
                                    >
                                      {' '}
                                      {center.name}{' '}
                                    </option>
                                  ))}
                                </select>
                                {/*<input type="text" name='location' value={event.centerId} className="form-control" aria-describedby="sizing-addon1" />*/}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">
                                  Start Date
                                </span>
                                <input
                                  id="startdate"
                                  type="date"
                                  name="startDate"
                                  defaultValue={event.startDate}
                                  onChange={this.getInput}
                                  className="form-control"
                                  aria-describedby="sizing-addon1"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">
                                  End Date
                                </span>
                                <input
                                  id="enddate"
                                  type="date"
                                  name="endDate"
                                  defaultValue={event.endDate}
                                  onChange={this.getInput}
                                  className="form-control"
                                  aria-describedby="sizing-addon1"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">
                                  Time
                                </span>
                                <input
                                  id="time"
                                  type="text"
                                  name="time"
                                  defaultValue={event.time}
                                  onChange={this.getInput}
                                  className="form-control"
                                  aria-describedby="sizing-addon1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <SubmitButton id="modify" name="MODIFY EVENT" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModifyEvent;
