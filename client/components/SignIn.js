import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userLogin } from '.././actions/UserActions';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '' ,
      password: '',
      error: {}
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
      email, password
    } = this.state;
    this.props.userLogin({
      email,
      password,
    });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.user.error) {
      this.setState({
        error: nextProps.user.error
      })
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
                <h4 id="signin" className="modal-title font-weight-bold">Log In</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">            
                <form  method="POST" role="form">         
                  <div className="form-group"> 
                    {error.message && <div className="alert alert-danger">{error.message}</div>}
                    <label className="control-label font-weight-bold" htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i> Email: </label>
                    <input type="email" name='email' onChange={this.getLoginInput} className="form-control" id="email" placeholder="username@domain.com" autoFocus />     
                  </div>
                  <div className="form-group">
                    <label className="control-label font-weight-bold" htmlFor="password"><i className="fa fa-lock" aria-hidden="true"></i> Password: </label>
                    <input type="password" name='password' onChange={this.getLoginInput} className="form-control" id="password" />
                  </div>                 
                  <button className="btn btn-success" onClick={this.loginInput}>Log In</button>
                </form>                      
              </div> 
              <div className="modal-footer">
                <span id="join">Not a member? <a data-toggle="modal" data-target="#signUp" data-dismiss="modal">Sign Up</a></span> 
                <span>Forgot <a data-toggle="modal" data-target="">Password?</a></span>
              </div>    
            </div>
          </div>               
        </div>
      </div> 
    );
  }
}

export default SignIn;
