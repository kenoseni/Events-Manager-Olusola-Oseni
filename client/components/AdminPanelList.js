import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AdminPanel from './AdminPanel';
import NavBar from './Navbar';

class AdminPanelList extends Component {
  render () {
    const { users, match, history, searchForCenters } = this.props;
    const { count, limit } = this.props.user;
    return (
      <div style={{paddingTop: '90px'}}>
        <NavBar home='Home' admin='Admin' centers='Centers' events='Events' page='Admin' logout='Log Out' match={match} searchForCenters={searchForCenters} />
        <div className="container">
          <div className="row" id="users">
            <AdminPanel users={users} match={match} history={history} count={count} limit={limit} {...this.props}/>  
          </div>
        </div>
      </div>
    )
  }
}
AdminPanelList.propTypes = {
  users: PropTypes.array,
  match: PropTypes.object.isRequired
}
export default AdminPanelList
