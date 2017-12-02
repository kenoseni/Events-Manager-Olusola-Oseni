import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SignIn from './SignIn'
import { createUser } from '.././actions/UserActions';

@connect((store) => {
  return  {
    user: store.user
  }
})

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '' ,
      lastname: '' ,
      email: '' ,
      password: ''
    }
  }

  getInput = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  

  register = (e) => {
    e.preventDefault()
    const {
      firstname, lastname, email, password,
    } = this.state;
    this.props.dispatch(createUser({
      firstname,
      lastname,
      email,
      password,
    }));
  }
  render () {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <SignIn />
        {/*Sign Up Modal*/}
        <div className="modal fade" id="signUp" role="dialog">
          <div className="modal-dialog modal-md">      
            {/*Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-center font-weight-bold">Sign Up</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>   
              </div>
              <div className="modal-body">       
                <form method="post" role="form" >
                  <div className="form-group">
                    <label htmlFor="name" className="font-weight-bold"><i className="fa fa-user" aria-hidden="true"></i> First Name:</label>
                    <input type="text" name="firstname"  onChange={this.getInput} className="form-control" id="" placeholder="please enter your first name" autoFocus required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="font-weight-bold"><i className="fa fa-user" aria-hidden="true"></i> Last Name:</label>
                    <input type="text" name="lastname"  onChange={this.getInput}  className="form-control" id="" placeholder="please enter your last name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="font-weight-bold"><i className="fa fa-envelope" aria-hidden="true"></i> Email:</label>
                    <input type="email" name="email"  onChange={this.getInput} className="form-control" id="" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="font-weight-bold"><i className="fa fa-lock" aria-hidden="true"></i> Password:</label>
                    <input type="password" name="password" onChange={this.getInput} className="form-control" id="" required />
                  </div>
                  <div>            
                  <button className="btn btn-success" onClick={this.register}>Sign Up.</button>
                  </div>
                </form>            
              </div>            
            </div>
          </div> 
        </div>
      </div>
    );
  }
}
