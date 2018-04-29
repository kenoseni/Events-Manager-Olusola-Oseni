import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SubmitButton from './SubmitButton';

class AddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Choose a Center',
      event: {},
      centers: []
    }
    this.submit = this.submit.bind(this)
    this.getInput = this.getInput.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.eventCenters.centers !== this.props.eventCenters.centers) {
      this.setState({centers: nextProps.eventCenters.centers})
    }
  }
  
  getInput(e) {
    this.setState({ event: {
      ...this.state.event,
      [e.target.name]: e.target.value
    },
   })
  }
  
  submit(e) {
    e.preventDefault();
    const {name, centerId, date, time} = this.state.event
    $('#addEvent').modal('hide')
    this.props.addEvent({
      name,  
      centerId, 
      date, 
      time
    })
  }
  render() {
    const {centers} = this.state
    return (
      <div>
        <div className="container">            
          {/*<!-- Add Events Modal -->*/}
          <div className="modal fade" id="addEvent" role="dialog">
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
                      <div className="card-body text-center">
                        <div className="input-group input-group-sm">
                          <span className="input-group-addon" id="sizing-addon1">Event Name</span>
                          <input type="text" name="name" onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Location</span>
                                <select className="form-control" name="centerId" onChange={this.getInput}>
                                  <option value={this.state.value}>Choose a Center</option>
                                  {
                                    centers.map(center => <option key={center.id} value={center.id}> {(center) ? center.name.toUpperCase(): ''} </option>)
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="col-xs-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Date</span>
                                <input type="date" name="date" onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                            <div className="col-xs-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Time</span>
                                <input type="time" name="time" onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <SubmitButton name='ADD EVENT'/>
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
export default AddEvent;
