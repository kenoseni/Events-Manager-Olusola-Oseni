import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as centerActions  from '../actions/CenterActions'
import {Link} from 'react-router-dom';
import AdminCenter from './AdminCenter';
import NavBar from './Navbar';
import Pages from './Pages';

export class SearchPage extends Component {
  constructor(props) {
    super(props); 
  }
  // componentDidMount() {
  //   const page = this.props.history.location.search.split('=')[1];
  //   this.props.getCenters(page);
  // }
  render () {
    const { searchedCenters, count, limit} = this.props.eventCenters;
    const { history } = this.props
    
    return (
      <div style={{paddingTop: '90px'}}>
        <NavBar home='Home' centers='Centers' events='Events'
          login='Log In' signup='Sign Up' admin='Admin' page='Home' logout='Log Out'
        />
        <h3 style={{padding: '30px 0px 0px 150px'}}>Search Results for Centers:</h3>
        <div className="container">
          <div className="row" id="centers">
            {(searchedCenters.length > 0) ?
              searchedCenters.map((center, i) => <AdminCenter {...this.props} key={center.id} i={i * -1} center={center} />) : 
              <h1 style={{marginTop:'200px', paddingLeft: '300px'}}>Oh Snap, No Result for your Search</h1>
            }
          </div>
        </div>
        {count !== undefined && <Pages count={count} history={history} limit={limit} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  eventCenters: state.eventCenters,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...centerActions, 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
