import React, {Component} from 'react';

class SubmitButton extends Component {

  render() {
    return (
      <div>
        <button type="submit" name={this.props.id} className="btn btn-success">
          {this.props.name}
        </button>
      </div>
    ) 
  }
}
export default SubmitButton;
