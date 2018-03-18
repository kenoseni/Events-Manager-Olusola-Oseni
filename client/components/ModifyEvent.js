import React, { Component } from 'react';
import SubmitButton from './SubmitButton'
import * as centerActions from '../actions/CenterActions';
import { getAllCenters } from '../actions/CenterActions';

class ModifyEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      centers: this.props.eventCenters.centers
    }
  
    this.submit = this.submit.bind(this)
    this.getInput = this.getInput.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({centers: nextProps.eventCenters.centers})
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
    const { event, i, centers} = this.state
    const {id} = this.props
    const center = centers.filter(center => center.id === event.centerId)
    const [centerName] = center
    console.log(centerName)
    return (
      <div>
        <div className="container">            
          {/*<!-- Add Events Modal -->*/}
          <div className="modal fade" id={`${id}`} role="dialog">
            <div className="modal-dialog modal-lg">      
              {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-center font-weight-bold">{this.props.title}</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>   
                </div>
                <div className="modal-body">
                  <form action="" method="" role="form" onSubmit={this.submit}>       
                    <div className="card">
                      <div className="card-header text-center">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Name</span>
                              <input type="text" name='name' value={(event.name) ? event.name.toUpperCase(): ''} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                          </div>
                          </div>
                        </div>  
                      </div>
                      <div className="card-body">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-xs-12 col-md-4">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Venue</span>
                                <select className="form-control" name="centerId" onChange={this.getInput}>
                                  <option value={event.centerId}> {(centerName) ? centerName.name: ''} </option>
                                  {
                                    centers.map(center => <option key={center.id} value={center.id}> {center.name} </option>)
                                  }
                                </select>
                                {/*<input type="text" name='location' value={event.centerId} className="form-control" aria-describedby="sizing-addon1" />*/}
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Date</span>
                                <input type="date" name='date' value={event.date} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Time</span>
                                <input type="text" name='time' value={event.time} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
