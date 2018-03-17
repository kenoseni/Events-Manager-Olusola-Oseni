import React, {Component} from 'react';

class AddEventModalButton extends Component {

  render() {
    return (
      <div>
        <button className="float" data-toggle="modal" data-target="#addEvent">
          <i className="fa fa-plus my-float"></i>
        </button>
      </div>
    ) 
  }
}
export default AddEventModalButton;
