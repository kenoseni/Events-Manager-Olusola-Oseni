import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import CenterImage from './CenterImage';
import * as centerActions from '../actions/CenterActions';
import { eventCenters } from '../reducers';
import { validateCenterInput } from './Validations';

class AddCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {},
      image: '',
      error: {}
    };
    this.submit = this.submit.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image.image !== this.props.image.image) {
      this.setState({ image: nextProps.image.image });
    }
  }

  isValid() {
    const { error, isValid } = validateCenterInput(this.state);
    if (!isValid) {
      this.setState({ error });
    }
    return isValid;
  }

  getInput(e) {
    this.setState({
      center: {
        ...this.state.center,
        [e.target.name]: e.target.value
      }
    });
  }

  submit(e) {
    e.preventDefault();
    this.setState({ error: {} });
    const {
      centerName,
      centerDescription,
      centerLocation,
      centerPrice,
      centerFacilities,
      centerCapacity,
      error
    } = this.state.center;
    const { image } = this.state;
    const { history } = this.props;
    if (this.isValid()) {
      this.props
        .addCenter({
          name: centerName,
          description: centerDescription,
          location: centerLocation,
          price: centerPrice,
          facilities: centerFacilities,
          capacity: centerCapacity,
          image
        })
        .then(() => {
          if (this.props.eventCenters.error.message !== undefined) {
            this.setState({ error: this.props.eventCenters.error });
          } else {
            $('#addCenter').modal('hide'), history.push('/centers');
          }
        });
    }
  }

  render() {
    const { error } = this.state;
    const { addImage } = this.props;
    return (
      <div>
        <div className="container">
          {/*<!-- Add Center Modal -->*/}
          <div
            className="modal fade right"
            id="addCenter"
            role="dialog"
            aria-labelledby="addCenter"
          >
            <div className="modal-dialog modal-full-height modal-right">
              {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div id="addCenterModal" className="modal-header">
                  <h4
                    id="addCenterTitle"
                    className="modal-title text-center font-weight-bold"
                  >
                    {this.props.title}
                  </h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form
                    action=""
                    method=""
                    role="form"
                    id="addForm"
                    onSubmit={this.submit}
                  >
                    <div id="imageFile" className="">
                      <div className="input-group mb-3">
                        <CenterImage addImage={addImage} />
                      </div>
                      {error.message && (
                        <div className="alert alert-danger">
                          {error.message}
                        </div>
                      )}
                      <div className="">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12">
                              <div id="addCenterForm" className="">
                                <span className="" id="sizing-addon1">
                                  Name:
                                </span>
                                <input
                                  type="text"
                                  name="centerName"
                                  id="addCenterName"
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
                                <span
                                  id="centerDescription"
                                  className=""
                                  id="sizing-addon1"
                                >
                                  Description:
                                </span>
                                <input
                                  type="text"
                                  id="addCenterDescription"
                                  name="centerDescription"
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
                                  Location:
                                </span>
                                <input
                                  type="text"
                                  id="addCenterLocation"
                                  name="centerLocation"
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
                                  Price:
                                </span>
                                <input
                                  type="text"
                                  id="addCenterPrice"
                                  name="centerPrice"
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
                                  Facilities:
                                </span>
                                <input
                                  type="text"
                                  id="addCenterFacilities"
                                  name="centerFacilities"
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
                                  Capacity:
                                </span>
                                <input
                                  type="text"
                                  id="addCenterCapacity"
                                  name="centerCapacity"
                                  onChange={this.getInput}
                                  className="form-control"
                                  placeholder=""
                                  aria-describedby="sizing-addon1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <SubmitButton id="submitButton" name="ADD CENTER" />
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
AddCenter.propTypes = {
  title: PropTypes.string.isRequired,
  addCenter: PropTypes.func.isRequired
};

export default AddCenter;
