import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as centerActions  from '../actions/CenterActions'
import  addImage  from '../actions/ImageActions'
import { eventCenters } from '../reducers';
import AdminCenterList from './AdminCenterList';
import AddCenterModalButton from './AddCenterModalButton'
import AddCenter from './AddCenter';
import Pages from './Pages';

class AdminCenters extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      const page = this.props.history.location.search.split('=')[1];
      this.props.getAllCenters(page);
    }
  }
  
  render () {
    const { centers, count, limit } = this.props.eventCenters;
    const { addCenter, deleteCenter, modifyCenter, addImage, history, getAllCenters } = this.props;
    if (this.props.isAdmin) {
      return (
        <div>
          <AdminCenterList centers={centers} deleteCenter={deleteCenter} modifyCenter={modifyCenter} {...this.props}  />
          <AddCenterModalButton />
          <AddCenter  title='Add Center' addCenter={addCenter} addImage={addImage} {...this.props} />
          {count !== undefined && <Pages count={count} history={history} limit={limit} />}
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
  addCenter: PropTypes.func.isRequired,
  deleteCenter: PropTypes.func.isRequired,
  modifyCenter: PropTypes.func.isRequired,
  eventCenters: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool
}
const mapStateToProps = (state) => ({
  eventCenters: state.eventCenters,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isadmin,
  image: state.image
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...centerActions,
  addImage 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminCenters)
