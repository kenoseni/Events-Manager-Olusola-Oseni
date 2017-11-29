import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.userSignInRequest(this.state)
  }
  render () {
    return (
      <div>
        {/*Sign in Modal*/}
        <div className="modal fade" id="logIn" role="dialog">
          <div className="modal-dialog modal-md" id="centerlogin">               
            {/*Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h4 id="signin" className="modal-title font-weight-bold">Log In</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">            
                <form action="" method="POST" role="form" onSubmit={this.onSubmit}>         
                  <div className="form-group"> 
                    <label className="control-label font-weight-bold" htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i> Email: </label>
                    <input type="email" name='email' value={this.state.email} onChange={this.onChange} className="form-control" id="" placeholder="username@domain.com" autoFocus />     
                  </div>
                  <div className="form-group">
                    <label className="control-label font-weight-bold" htmlFor="password"><i className="fa fa-lock" aria-hidden="true"></i> Password: </label>
                    <input type="password" name='password' value={this.state.password} onChange={this.onChange} className="form-control" id="" />
                  </div>                 
                  <button type="submit" className="btn btn-success">Log In</button>
                </form>                      
              </div> 
              <div className="modal-footer">
                <h6 id="join">Not a member?<p> <a href="#" data-toggle="modal" data-target="#signUp" data-dismiss="modal">Sign Up</a></p></h6> 
                <h6> <p> Forgot <a href="#" data-toggle="modal" data-target="">Password?</a> </p> </h6> 
              </div>    
            </div>
          </div>               
        </div>
      </div> 
    );
  }
}
SignIn.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
}
