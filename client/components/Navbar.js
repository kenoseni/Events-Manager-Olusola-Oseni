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
                  <button className="nav-link">{this.props.home}<span className="sr-only">(current)</span></button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">{this.props.centers}</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" >{this.props.events}</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">About Us</button>
                  </li>
              </ul>
              <form className="form-inline">
                <i className="fa fa-search fa-lg "></i>
                <input className="form-control mr-sm-2" type="text" placeholder="Search for event centers" aria-label="Search" />
              </form>
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <button className="nav-link" data-toggle="modal" data-target="#logIn">{this.props.login}</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-toggle="modal" data-target="#signUp">{this.props.signup}</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
