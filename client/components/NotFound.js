import React, { Component } from 'react';
import NavBar from './Navbar';

class NotFound extends Component {
  render () {
    return (
      <div>
        <NavBar home='Home' centers='Centers' events='Events' />
        <h1 className="container alert alert-danger" style={{marginTop:'100px'}}>
          Not Found!
        </h1>
      </div>
    )
  }
}
export default NotFound;
