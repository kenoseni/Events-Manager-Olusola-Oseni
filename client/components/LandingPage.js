import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as userActions from '../actions/UserActions';
import user from '../reducers'
import Navbar from './Navbar';
import SignUp from './SignUp'
import SignIn from './SignIn'

class LandingPage extends Component {
  render () {
    const {createUser, userLogin} = this.props
    return (
      <div>
      <Navbar home='Home' centers='Centers' events='Events' login='Log In' signup='Sign Up' />
        <div  id="intro" className="view hm-black-light">
          <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 text-center">
                {/*Heading*/} 
                <h2 id="pagetitle" className="display-3 font-bold white-text mb-2"><i>Encore</i> Group</h2>
                {/*Divider*/} 
                <hr className="hr-light" />
                {/*Divider*/} 
                <h5 id="slogan" className="my-3 text-center white-text">An elegant events company</h5>
              </div>
            </div>
          </div>
        </div>
        <SignUp  createUser={createUser} {...this.props}/>
        <SignIn userLogin={userLogin} {...this.props} />
      </div>
    );
  }
}
LandingPage.propTypes = {
  createUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    ...userActions, 
  }, dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
