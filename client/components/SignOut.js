import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {signout} from '../actions/UserActions';

export class SignOut extends Component {

  componentWillMount() {
    this.props.signout();   
  };

  render() {
    return <Redirect to="/" push />;
  }
}

SignOut.propTypes = {
  signout: PropTypes.func.isRequired
}
export default connect((state) => {return {}}, {signout} )(SignOut)
