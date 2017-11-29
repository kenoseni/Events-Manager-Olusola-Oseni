import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import {userSignInRequest} from '.././actions/signinActions'

class SigninPage extends React.Component {
  render () {
    const { userSignInRequest } = this.props;
    return (
      <div>
        <SignIn userSignInRequest={userSignInRequest} />
      </div>
    )
  }
} 

SigninPage.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, {userSignInRequest})(SigninPage);