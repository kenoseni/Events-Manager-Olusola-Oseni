import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as centerActions  from '../actions/CenterActions'
import { eventCenters } from '../reducers';
import AdminCenterList from './AdminCenterList';

class AdminCenters extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getAllCenters();
    }
  }
  
  render () {
    const { centers } = this.props.eventCenters;
    
    if (this.props.isAdmin) {
      return (
        <div>
          <AdminCenterList centers={centers} {...this.props}  />
        </div>
      )
    }else {
      return (
        <div className="alert alert-danger"><h2 style={{paddingLeft: '300px'}}>You are not Authorised to View this Page</h2></div>
      )
    }
  }
}
AdminCenters.propTypes = {
  eventCenters: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => ({
  eventCenters: state.eventCenters,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isadmin,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...centerActions, 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminCenters)
