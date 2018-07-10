import React, {Component} from 'react';
import { history } from '../routes';
import PropTypes from 'prop-types';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      mail: '' ,
      pswd: '',
      error: {},
      hideModal: false,
      isOpen: false
    }
    this.getLoginInput = this.getLoginInput.bind(this);
    this.loginInput = this.loginInput.bind(this);
  }

  getLoginInput (e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  loginInput (e) {
    e.preventDefault()
    this.setState({error: {}})
    const {
      mail, pswd
    } = this.state;
    this.props.userLogin({
      email: mail,
      password: pswd,
    });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.user.error) {
      this.setState({
        error: nextProps.user.error
      })
    }
    if (nextProps.user.status == 'Success') {
      this.setState({
        hideModal: true
      })
      $('#logIn').modal('hide')
      history.push("/events")
    }
  }
  render () {
    const {error, email, password} = this.state
    return (
      <div>
        {/*Sign in Modal*/}
        <div className="modal fade" id="logIn" role="dialog">
          <div className="modal-dialog modal-md" id="centerlogin">               
            {/*Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h4 id="signinTitle" className="modal-title font-weight-bold">Log In</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">            
                <form id='loginform' method="POST" role="form">         
                  <div id="formgroup" className="form-group"> 
                    {error.message && <div className="alert alert-danger">{error.message}</div>}
                    <label htmlFor="l-email" className="font-weight-bold" >
                      <i className="fa fa-envelope" aria-hidden="true"></i> Email: 
                    </label>
                    <input id='l-email' type="email"
                      name='mail' onChange={this.getLoginInput} 
                      className="form-control eeemail" id="email" 
                      placeholder="username@domain.com"
                    />     
                  </div>
                  <div id='lpswd' className="form-group">
                    <label htmlFor="l-password" className="font-weight-bold">
                      <i className="fa fa-lock" aria-hidden="true"></i> Password: 
                    </label>
                    <input id='l-password' type="password" name='pswd'
                      onChange={this.getLoginInput}
                      className="form-control pwd" id="password"
                    />
                  </div>                 
                  <button id='l-button' className="btn btn-success" onClick={this.loginInput}>
                    Log In
                  </button>
                </form>                      
              </div> 
              <div className="modal-footer">
                <span id="join">Not a member? 
                  <a data-toggle="modal" data-target="#signUp" data-dismiss="modal">
                    Sign Up
                  </a>
                </span> 
                {/**<span>Forgot <a data-toggle="modal" data-target="">Password?</a></span>**/}
              </div>    
            </div>
          </div>               
        </div>
      </div> 
    );
  }
}


SignIn.propTypes = {
  userLogin: PropTypes.func.isRequired
}
export default SignIn;
