import React, { Component } from 'react';
import axios from 'axios';

class CenterImage extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage(e) {
    let file = e.target.files[0];
    let imageData = new FormData();
    imageData.append('file', file);
    imageData.append('upload_preset', 'znp2fjsy');
    this.props.addImage(imageData);
  }

  render() {
    return (
      <div id="filefield1" className="file-field input-group mb-3">
        <div className="btn btn-outline-info waves-effect btn-sm float-left image-upload">
          <div id="fileinput" className="">
            <input
              type="file"
              name="file"
              id="file-upload"
              onChange={this.uploadImage}
              className="form-control-file"
              aria-describedby="sizing-addon1"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CenterImage;
