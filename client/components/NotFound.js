import React, { Component } from 'react';

class NotFound extends Component {
  render () {
    return (
      <h1>
        <div className="container alert alert-danger" style={{marginTop:'30px'}}>
          Not Found!
        </div>
      </h1>
    )
  }
}
export default NotFound;
