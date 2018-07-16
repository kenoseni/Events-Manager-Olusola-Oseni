import React, {Component} from 'react';
import {link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as centerActions from '.././actions/CenterActions'
import { eventCenters } from '.././reducers/';
import AdminCenterDetail from './AdminCenterDetail';

export class AdminCenterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.eventCenters.center
    }
  }
  componentWillMount() {
    let id = this.props.match.params.id;
    this.props.getOneCenter(id);
  }
  
  componentWillReceiveProps(nextProps){
    if (nextProps.eventCenters.center !== this.props.eventCenters.center) {
      this.setState({
        center: nextProps.eventCenters.center
      })
    }
  }
  render () {
    const { center } = this.state;
    const { getOneCenter, searchForCenters} = this.props;
    const { id } = this.props.match.params;
    
    return (
      <div>
        {center !== {} && 
          <AdminCenterDetail 
            center={center} 
            getOneCenter={getOneCenter} 
            id={id} searchForCenters={searchForCenters} 
          />
        }
      </div>
    )
  }
}
AdminCenterDetails.propTypes = {
  getOneCenter: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  eventCenters: state.eventCenters
});

const mapDispatchToProps = dispatch => bindActionCreators(centerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminCenterDetails)
