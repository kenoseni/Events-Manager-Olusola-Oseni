import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteCenter = this.handleDeleteCenter.bind(this);
  } 
  handleDeleteCenter() {
    const {i, center} = this.props
    this.props.deleteCenter(center.id)
  }
  render () {
    return (
      <div>
        <div className="container">            
          {/*<!--remove center Modal -->*/}
          <div className="modal fade top" id={`${this.props.i}`} role="dialog">
            <div className="modal-dialog modal-sm">               
              {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{this.props.title}</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  {/*<!--Warning message-->*/}
                  <button className="btn btn-danger" onClick={this.handleDeleteCenter} data-dismiss="modal">DELETE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeleteModal.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deleteCenter: PropTypes.func.isRequired,
}

export default DeleteModal;
