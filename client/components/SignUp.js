import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'toastr';
import { history } from '../routes';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      signupError: undefined
    };
    this.getInput = this.getInput.bind(this);
    this.register = this.register.bind(this);
  }

  getInput(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  register(e) {
    e.preventDefault();
    this.setState({ error: {} });
    const { firstname, lastname, email, password } = this.state;
    this.props.createUser({
      firstname,
      lastname,
      email,
      password
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.signupError) {
      this.setState({
        signupError: nextProps.user.signupError
      });
    }
    if (
      nextProps.user.status == 'Success' &&
      nextProps.user.message == 'User successfully signed up'
    ) {
      $('#signUp').modal('hide');
      history.push('/events');
      toast.success('You have successfully signed up. Welcome!');
    }
  }

  render() {
    const { signupError, firstname, lastname, email, password } = this.state;

    return (
      <div>
        {/*Sign Up Modal*/}
        <div className="modal fade" id="signUp" role="dialog">
          <div className="modal-dialog modal-md">
            {/*Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-center font-weight-bold">
                  Sign Up
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div id="modalbody" className="modal-body">
                <form method="post" id="signup" role="form">
                  <div className="form-group">
                    {signupError && (
                      <div className="alert alert-danger">
                        {signupError.error.message}
                      </div>
                    )}
                    <label htmlFor="name" className="font-weight-bold">
                      <i className="fa fa-user" aria-hidden="true" /> First
                      Name:
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      onChange={this.getInput}
                      className="form-control"
                      id="fname"
                      placeholder="please enter your first name"
                      required
                    />
                  </div>
                  <div id="lastname" className="form-group">
                    <label htmlFor="lname" className="font-weight-bold">
                      <i className="fa fa-user" aria-hidden="true" /> Last Name:
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      onChange={this.getInput}
                      className="form-control"
                      id="lname"
                      placeholder="please enter your last name"
                      required
                    />
                  </div>
                  <div id="email" className="form-group">
                    <label htmlFor="email" className="font-weight-bold">
                      <i className="fa fa-envelope" aria-hidden="true" /> Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.getInput}
                      className="form-control"
                      id="mail"
                      required
                    />
                  </div>
                  <div id="pswd" className="form-group">
                    <label htmlFor="password" className="font-weight-bold">
                      <i className="fa fa-lock" aria-hidden="true" /> Password:
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={this.getInput}
                      className="form-control"
                      id="pword"
                      required
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-success"
                      id="c-button"
                      onClick={this.register}
                    >
                      Sign Up.
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  createUser: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};
export default SignUp;
