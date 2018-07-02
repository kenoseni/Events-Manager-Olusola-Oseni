import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import CenterImage from './CenterImage';
import * as centerActions  from '../actions/CenterActions';
import { eventCenters } from '../reducers';

class AddCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {},
      image: '',
      error: {}
    }
    this.submit = this.submit.bind(this)
    this.getInput = this.getInput.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image.image !== this.props.image.image) {
      this.setState({image: nextProps.image.image})
    }
    if(nextProps.eventCenters.error) {
      this.setState({
        error: nextProps.eventCenters.error
      })
    }
    if (this.state.center !== false) {
      $('#addCenter').modal('hide')
    }
  }

  getInput(e) {
    this.setState({ center: {
      ...this.state.center,
      [e.target.name]: e.target.value
    }
   })
  }
  
  submit(e) {
    e.preventDefault();
    this.setState({error: {}})
    const {name, description, location, price, facilities, capacity} = this.state.center
    const { image } = this.state
    this.props.addCenter({
      name, 
      description, 
      location, 
      price,
      facilities, 
      capacity,
      image
    })
  }
  
  render() {
    const {error} = this.state
    const {addImage} = this.props
    return (
      <div>
        <div className="container">            
          {/*<!-- Add Center Modal -->*/}
          <div className="modal fade right" id="addCenter" role="dialog" aria-labelledby="addCenter">
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
                      <div className="input-group mb-3">
                        <CenterImage addImage={addImage} />
                      </div>
                      {error.message && <div className="alert alert-danger">{error.message}</div>}
                      <div className="">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Name:</span>
                                <input type="text" name="name" onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Description:</span>
                                <input type="text" name='description' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Location:</span>
                                <input type="text" name='location' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Price:</span>
                                <input type="text" name='price' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Facilities:</span>
                                <input type="text" name='facilities' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="">
                                <span className="" id="sizing-addon1">Capacity:</span>
                                <input type="text" name= 'capacity' onChange={this.getInput} className="form-control" placeholder="" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <SubmitButton name='ADD CENTER' />
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
AddCenter.propTypes = {
  title: PropTypes.string.isRequired,
  addCenter: PropTypes.func.isRequired
}

export default AddCenter;
