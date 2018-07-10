import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleDeleteCenter = this.handleDeleteCenter.bind(this);
  }
  handleDeleteEvent() {
    const {i, id} = this.props
    this.props.deleteEvent(id).then(
      (res) => this.props.history.push('/events')
    )
  } 
  handleDeleteCenter() {
    const {i, center} = this.props
    this.props.deleteCenter(center.id).then(
      (res) => this.props.history.push('/centers')
    )
  }
  render () {
    return (
      <div>
        <div className="container">            
          {/*<!--remove center Modal -->*/}
          <div className="modal fade top" id={`${this.props.i}`} role="dialog">
            <div className="modal-dialog modal-sm modal-notify modal-danger">               
              {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <h4 className="modal-title">{this.props.title}</h4>
                  <button type="button"
                   className="close white"
                    data-dismiss="modal">&times;
                  </button>
                </div>
                <div className="modal-body">
                  {/*<!--Warning message-->*/}
                  <button className="btn btn-danger"
                    id='deleteButtion'
                   onClick={(this.props.event)? this.handleDeleteEvent: this.handleDeleteCenter}
                    data-dismiss="modal">DELETE
                  </button>
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
