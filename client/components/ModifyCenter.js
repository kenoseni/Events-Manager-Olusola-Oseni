import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton'

class ModifyCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center
    }
  
    this.submit = this.submit.bind(this)
    this.getInput = this.getInput.bind(this)
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
    const {name, description, location, price, facilities, capacity, avaliability, id} = this.state.center
    $(`#${id}`).modal('hide')
    this.props.modifyCenter({
      name, 
      description, 
      location, 
      price,
      facilities, 
      capacity,
      avaliability
    }, id)
  }

  render () {
    const {center, i} = this.state
    return (
      <div>
        {/*<!-- Modify Center Modal -->*/}
        <div className="modal fade" id={`${center.id}`} role="dialog">
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
                      <div className="input-group input-group-sm">
                        <input type="file" className="form-control-file" aria-describedby="sizing-addon1" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Name</span>
                              <input type="text" name='name' value={center.name} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Description</span>
                              <input type="text" name='description' value={center.description} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Location</span>
                              <input type="text" name='location' value={center.location} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Price</span>
                              <input type="text" name='price' value={center.price} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Facilities</span>
                              <input type="text" name='facilities' value={center.facilities} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Capacity</span>
                              <input type="text" name='capacity' value={parseInt(center.capacity)} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon" id="sizing-addon1">Availability</span>
                              <input type="text" name= 'avaliability' value={center.avaliability} onChange={this.getInput} className="form-control" aria-describedby="sizing-addon1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SubmitButton name='MODIFY CENTER'/>
                </form>                       
              </div>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}
ModifyCenter.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  modifyCenter: PropTypes.func.isRequired,
}
export default ModifyCenter
