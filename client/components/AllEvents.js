import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Navbar3 from './Navbar3';
import Footer from './Footer';
import * as getUserEvents from '.././actions/EventActions'
import eventReducer from '.././reducers/EventReducer'


class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: '',
      location: '',
      address: '',
      centerId: '',
      userId: ''
    }
  }
  componentWillMount() {
    this.props.getUserEvents(this.props);
  }

  render() {
    const { eventReducer } = this.props;
    for (let x of eventReducer) {
      console.log(x)
    }
    return (
      <div>
        <Navbar3 />
        <div className="container">
          {eventReducer.map((event) => {
            return (
              <div>
                <div className="row">
                  <div className="col-md-2"></div>
                    <div className="col-md-8">
                      <div className="card" id="event">
                        <div className="card-header indigo lighten-1 text-center white-text">
                          <h4>{event.name}</h4>
                        </div>
                        <div className="card-body">
                          <p className="card-text">Location: {event.location}</p>
                          <p className="card-text">Date: {event.date}</p>
                          <p className="card-text">Time: {event.time}</p>
                          <p className="card-text">Venue: {event.centerId}</p>
                        </div>
                        <div className="card-footer bg-transparent">
                          <ul className="nav">
                            <li><a href="" data-toggle="modal" data-target="#modifyEvent1"><i className="fa fa-pencil-square-o fa-lg nav-link" aria-hidden="true"></i></a></li>
                            <li><a href="" data-toggle="modal" data-target="#modal2" id="alert-target" ><i className="fa fa-trash-o float-right fa-lg nav-link" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  <div className="col-md-2"></div>
                  </div>
                </div>
              )
            })}
          
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  eventReducer: state.event
});

const mapDispatchToProps = (dispatch) => bindActionCreators(getUserEvents, dispatch)
const Events = connect(mapStateToProps, mapDispatchToProps)(AllEvents);

export default Events;