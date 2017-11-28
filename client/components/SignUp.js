import React, {Component} from 'react';

export default class SignUP extends Component {
  render () {
    return (
      <div>
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
                <form action="" method="POST" role="form">
                  <div className="form-group">
                    <label htmlFor="name" className="font-weight-bold"><i className="fa fa-user" aria-hidden="true"></i> First Name:</label>
                    <input type="text" className="form-control" id="" placeholder="please enter your first name" autoFocus />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="font-weight-bold"><i className="fa fa-user" aria-hidden="true"></i> Last Name:</label>
                    <input type="text" className="form-control" id="" placeholder="please enter your last name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="font-weight-bold"><i className="fa fa-envelope" aria-hidden="true"></i> Email:</label>
                    <input type="email" className="form-control" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="font-weight-bold"><i className="fa fa-lock" aria-hidden="true"></i> Password:</label>
                    <input type="password" className="form-control" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="font-weight-bold"><i className="fa fa-lock" aria-hidden="true"></i> Retype Password:</label>
                    <input type="password" className="form-control" id="" />
                  </div>            
                  <a href="eventcenters.html" type="submit" className="btn btn-success">Sign Up</a>
                </form>            
              </div>            
            </div>
          </div> 
        </div>
      </div>
    );
  }
}