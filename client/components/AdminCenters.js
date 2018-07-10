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

export class AdminCenters extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    if (this.props.isAuthenticated) {
      const page = this.props.history.location.search.split('=')[1];
      this.props.getCenters(page);
    }
    if (!this.props.isAuthenticated) {
      this.props.getCenters();
    }
  }
  
  render () {
    const { centers, count, limit } = this.props.eventCenters;
    const { addCenter,
      deleteCenter,
      modifyCenter,
      addImage, 
      history,
      getCenters,
      searchForCenters 
    } = this.props;
    return (
      <div>
        <AdminCenterList 
          centers={centers}
          deleteCenter={deleteCenter}
          modifyCenter={modifyCenter}
          {...this.props}  
        />
        {this.props.isAdmin&&<AddCenterModalButton />}
        {this.props.isAdmin&&
          <AddCenter  title='Add Center'
            addCenter={addCenter}
            addImage={addImage}
            {...this.props}
          />
        }
        {count !== undefined &&
          <Pages count={count}
            history={history}
            limit={limit}
          />
        }
      </div>
      )
  }
}
AdminCenters.propTypes = {
  addCenter: PropTypes.func.isRequired,
  deleteCenter: PropTypes.func.isRequired,
  modifyCenter: PropTypes.func.isRequired,
  getCenters: PropTypes.func.isRequired,
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
