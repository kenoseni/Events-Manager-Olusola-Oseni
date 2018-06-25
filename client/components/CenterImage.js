import React, {Component} from 'react';
import axios from 'axios';

class CenterImage extends Component {
  constructor(props) {
    super(props)
    this.uploadImage = this.uploadImage.bind(this)
  }
  
  uploadImage(e) {
    console.log(e)
    let file = e.target.files[0]
    console.log(file)
    let imageData = new FormData();
    imageData.append('file', file)
    imageData.append('upload_preset', 'znp2fjsy')
    this.props.addImage(imageData)
  }

  render() {
    return (
      <div className="">
        <input type="file" name="file" id="file-upload" onChange={this.uploadImage} className="form-control-file" aria-describedby="sizing-addon1" />
      </div>
    ) 
  }
}
export default CenterImage;