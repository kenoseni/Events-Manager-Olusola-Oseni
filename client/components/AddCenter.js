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
      image: ''
    }
    this.submit = this.submit.bind(this)
    this.getInput = this.getInput.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image.image !== this.props.image.image) {
      this.setState({image: nextProps.image.image})
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
    const {name, description, location, price, facilities, capacity} = this.state.center
    const { image } = this.state
    $('#addCenter').modal('hide')
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
    const {addImage} = this.props
    return (
      <div>
        <div className="container">            
          {/*<!-- Add Center Modal -->*/}
          <div className="modal fade top" id="addCenter" role="dialog" aria-labelledby="addCenter">
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
                        <CenterImage addImage={addImage} />
                      </div>
                      <div className="card-body">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Name</span>
                                <input type="text" name="name" onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Description</span>
                                <input type="text" name='description' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Location</span>
                                <input type="text" name='location' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Price</span>
                                <input type="text" name='price' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Facilities</span>
                                <input type="text" name='facilities' onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon" id="sizing-addon1">Capacity</span>
                                <input type="text" name= 'capacity' onChange={this.getInput} className="form-control" placeholder="" aria-describedby="sizing-addon1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
