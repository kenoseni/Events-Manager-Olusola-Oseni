import React, {Component} from 'react';

class SubmitButton extends Component {

  render() {
    return (
      <div>
        <button type="submit" className="btn btn-success">
          {this.props.name}
        </button>
      </div>
    ) 
  }
}
export default SubmitButton;
