import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AdminCenter from './AdminCenter';
import NavBar from './Navbar';

class AdminCenterList extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const { centers, match } = this.props;
    return (
      <div style={{paddingTop: '90px'}}>
        <NavBar home='Home' centers='Centers' events='Events' page='Centers' logout='Log Out' match={match} />
        <div className="container">
          <div className="row" id="centers">
            {(centers.length > 0) ?
              centers.map((center, i) => <AdminCenter {...this.props} key={center.id} i={i * -1} center={center} />) : 
              <h1 style={{marginTop:'200px', paddingLeft: '300px'}}>No Centers Created, Add a Center</h1>
            }
          </div>
        </div>
      </div>
    )
  }
}
AdminCenterList.propTypes = {
  centers: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

export default AdminCenterList;
