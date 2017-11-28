import React, {Component} from 'react';

export default class SignUP extends Component {
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
                <form action="" method="POST" role="form">         
                  <div className="form-group"> 
                    <label className="control-label font-weight-bold" htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i> Email: </label>
                    <input type="email" className="form-control" id="" placeholder="username@domain.com" autoFocus />     
                  </div>
                  <div className="form-group">
                    <label className="control-label font-weight-bold" htmlFor="password"><i className="fa fa-lock" aria-hidden="true"></i> Password: </label>
                    <input type="password" className="form-control" id="" />
                  </div>                 
                  <a href="myevents.html" type="submit" className="btn btn-success">Log In</a>
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