import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../routes';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if(!this.props.isAuthenticated) {
        history.push('/');
      }
    }
    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  return connect(mapStateToProps)(Authenticate)
}
