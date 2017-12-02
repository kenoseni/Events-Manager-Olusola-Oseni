import React, {Component} from 'react';

export default class Navbar extends Component {
    render () {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark indigo smooth-scroll fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><i className="" aria-hidden="true"></i> <i>Encore </i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/centers">Event Centers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events">Events</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">About Us</a>
                  </li>
              </ul>
              <form className="form-inline">
                <i className="fa fa-search fa-lg "></i>
                <input className="form-control mr-sm-2" type="text" placeholder="Search for event centers" aria-label="Search" />
              </form>
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link" data-toggle="modal" data-target="#logIn"><h5>Log In</h5></a>
                </li>
                <li className="nav-item">
                  <a href="myevents.html" className="nav-link" data-toggle="modal" data-target="#signUp"><h5>Sign Up</h5></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
    }
}
