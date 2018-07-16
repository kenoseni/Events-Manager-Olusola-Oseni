import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import CenterImage from './CenterImage';
import { validateModifyCenterInput } from './Validations';
import toastr from 'toastr';

class ModifyCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center,
      error: {}
    };

    this.submit = this.submit.bind(this);
    this.getInput = this.getInput.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    let { image } = this.state.center;
    if (nextProps.image.image) {
      this.setState({ newImage: nextProps.image.image });
    }
  }
  isValid() {
    const { error, isValid } = validateModifyCenterInput(this.state);
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
      name,
      description,
      location,
      price,
      facilities,
      capacity,
      avaliability,
      image,
      id
    } = this.state.center;
    const { newImage } = this.state;
    const { history } = this.props;
    if (this.isValid()) {
      this.props
        .modifyCenter(
          {
            name,
            description,
            location,
            price,
            facilities,
            capacity,
            avaliability,
            image: newImage || image
          },
          id
        )
        .then(() => {
          if (this.props.eventCenters.error.message !== undefined) {
            this.setState({ error: this.props.eventCenters.error });
          } else {
            $(`#${id}`).modal('hide'), history.push('/centers');
          }
        });
    }
    // if(this.state.error) {
    //   toastr.error(this.state.error.message)
    // }
  }

  render() {
    const { center, i, error } = this.state;
    const { addImage } = this.props;
    return (
      <div>
        {/*<!-- Modify Center Modal -->*/}
        <div className="modal fade right" id={`${center.id}`} role="dialog">
          <div className="modal-dialog modal-full-height modal-right">
            {/*<!-- Modal content-->*/}
            <div className="modal-content">
              <div id="modifyCenterModal" className="modal-header">
                <h4
                  id="modifyCenterTitle"
                  className="modal-title font-weight-bold"
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
                  onSubmit={this.submit}
                  id="modifyForm"
                >
                  <div className="">
                    <div className="input-group mb-3">
                      <CenterImage addImage={addImage} />
                    </div>
                    {error.message && (
                      <div className="alert alert-danger">{error.message}</div>
                    )}
                    <div className="">
                      <div className="container-fluid">
                        <div className="row">
                          <div id="modifyCenterForm" className="col-sm-12">
                            <span className="" id="sizing-addon1">
                              Name:
                            </span>
                            <input
                              type="text"
                              id="modifiedCenterName"
                              name="name"
                              value={center.name}
                              onChange={this.getInput}
                              className="form-control"
                              aria-describedby="sizing-addon1"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <span className="" id="sizing-addon1">
                              Description:
                            </span>
                            <input
                              type="text"
                              id="modifiedCenterDescription"
                              name="description"
                              value={center.description}
                              onChange={this.getInput}
                              className="form-control"
                              aria-describedby="sizing-addon1"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <span className="" id="sizing-addon1">
                              Location:
                            </span>
                            <input
                              type="text"
                              id="modifiedCenterLocation"
                              name="location"
                              value={center.location}
                              onChange={this.getInput}
                              className="form-control"
                              aria-describedby="sizing-addon1"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <span className="" id="sizing-addon1">
                              Price:
                            </span>
                            <input
                              type="text"
                              id="modifiedCenterPrice"
                              name="price"
                              value={center.price}
                              onChange={this.getInput}
                              className="form-control"
                              aria-describedby="sizing-addon1"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <span className="" id="sizing-addon1">
                              Facilities:
                            </span>
                            <input
                              type="text"
                              id="modifiedCenterFacilities"
                              name="facilities"
                              value={center.facilities}
                              onChange={this.getInput}
                              className="form-control"
                              aria-describedby="sizing-addon1"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <span className="" id="sizing-addon1">
                              Capacity:
                            </span>
                            <input
                              type="text"
                              id="modifiedCenterCapacity"
                              name="capacity"
                              value={center.capacity}
                              onChange={this.getInput}
                              className="form-control"
                              aria-describedby="sizing-addon1"
                            />
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col-sm-12">
                            <span className="" id="sizing-addon1">Availability:</span>
                            <input type="text"
                              name= 'avaliability'
                              value={center.avaliability}
                              onChange={this.getInput}
                              className="form-control"
                              aria-describedby="sizing-addon1"
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <br />
                  <SubmitButton id="modify" name="MODIFY CENTER" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ModifyCenter.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  modifyCenter: PropTypes.func.isRequired
};
export default ModifyCenter;
