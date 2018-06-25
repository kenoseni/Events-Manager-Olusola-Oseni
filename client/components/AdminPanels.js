import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../reducers';
import * as userActions from '../actions/UserActions';
import AdminPanelList from './AdminPanelList';

class AdminPanels extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      const page = this.props.history.location.search.split('=')[1];
      this.props.getAllUsers(page);
    }
  }
  
  render () {
    const { users } = this.props.user;
    
    if (this.props.isAdmin) {
      return (
        <div>
          <AdminPanelList users={users} {...this.props}  />
        </div>
      )
    }else {
      return (
        <div className="alert alert-danger"><h2 style={{paddingLeft: '300px'}}>You are not Authorised to View this Page</h2></div>
      )
    }
  }
}

AdminPanels.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool
}
const mapStateToProps = (state) => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isadmin,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...userActions, 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanels)