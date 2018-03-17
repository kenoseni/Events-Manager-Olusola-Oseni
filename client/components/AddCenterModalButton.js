import React, {Component} from 'react';

class AddCenterModalButton extends Component {

  render() {
    return (
      <div>
        <button className="float" data-toggle="modal" data-target="#addCenter">
          <i className="fa fa-plus my-float"></i>
        </button>
      </div>
    ) 
  }
}
export default AddCenterModalButton;