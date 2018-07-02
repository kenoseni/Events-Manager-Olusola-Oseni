import React, { Component } from 'react';
import SubmitButton from './SubmitButton'
import * as centerActions from '../actions/CenterActions';
import { getCenters } from '../actions/CenterActions';


class ModifyEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      allCenters: this.props.eventCenters.allCenters
    }
  
    this.submit = this.submit.bind(this)
    this.getInput = this.getInput.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({allCenters: nextProps.eventCenters.allCenters})
  }
  
  getInput(e) {
    this.setState({ event: {
      ...this.state.event,
      [e.target.name]: e.target.value
    }
   })
  }

  submit(e) {
    e.preventDefault();
    const {name, centerId, date, time, id} = this.state.event
    $('#id').modal('hide')
    this.props.modifyEvent({
      name, 
      centerId, 
      date, 
      time
    }, id)
  }

  render () {
    const { event, i, allCenters} = this.state
    const {id} = this.props
    const center = allCenters.filter(center => center.id === event.centerId)
    const [centerName] = center
    return (
      <div>
        <div className="container modify-event-height">            
          {/*<!-- Add Events Modal -->*/}
          <div className="modal fade right" id={`${id}`} role="dialog">
            <div className="modal-dialog modal-full-height modal-right">      
              {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-center font-weight-bold">{this.props.title}</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>   
                </div>
                <div className="modal-body">
                  <form action="" method="" role="form" onSubmit={this.submit}>       
                    <div className="">
                      <div className="">
                        <div className="">
                          <div className="input-group mb-3">
                          </div>
                        </div>  
                      </div>
                      <div className="">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12">
                              <span className="" id="sizing-addon1">Event Name:</span>
                              <input type="text" name='name' value={(event.name) ? event.name.toUpperCase(): ''} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Venue</span>
                                <select className="form-control" name="centerId" onChange={this.getInput}>
                                  <option value={event.centerId}> {(centerName) ? centerName.name: ''} </option>
                                  {
                                    allCenters.map(center => <option key={center.id} value={center.id}> {center.name} </option>)
                                  }
                                </select>
                                {/*<input type="text" name='location' value={event.centerId} className="form-control" aria-describedby="sizing-addon1" />*/}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Date</span>
                                <input type="date" name='date' value={event.date} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Time</span>
                                <input type="text" name='time' value={event.time} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <SubmitButton name='MODIFY EVENT'/>
                  </form>            
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ModifyEvent
