import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Search from './Search';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.role = 'user',
    this.isAdmin = false
    this.isLoggedIn = false
  }
  
  componentWillMount() {
    let token = localStorage.getItem('x-access-token');
    if (token) {
      let decodedToken = jwtDecode(token);
      let isAdmin = decodedToken.isadmin;
      let role = decodedToken.userrole
      let timeLeft = decodedToken.exp - (Date.now() / 1000);
      let isLoggedIn = !(timeLeft <= 0)

      if (isLoggedIn) {
      this.isLoggedIn = true
      }

      if(isAdmin) {
      this.isAdmin = true
      }
    }  
  }

  render () {
    const { searchForCenters } = this.props;
    let navItemClass = ["nav-item"];

    switch(this.props.page) {
      case 'Home':
        navItemClass.push("active")
      case 'Events':
        navItemClass.push("active")
      case 'Centers':
        navItemClass.push("active")
      case 'CenterDetails':
        navItemClass.push("active")
      case 'Admin':
        navItemClass.push("active")
      case 'About':
        navItemClass.push("active")
      default :
      navItemClass
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark indigo smooth-scroll fixed-top">
        <div className="container-fluid">
          <Link to={`/`}>
            <button className="navbar-brand" ><i className="" aria-hidden="true"></i> <i>Encore </i></button>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link to={`/`}>
                <li className={(this.props.page === 'Home') ? navItemClass.join(' ') : 'nav-item'}>
                  <button className="nav-link">{this.props.home}<span className="sr-only">(current)</span></button>
                </li>
              </Link>
              <Link to={`/centers`}>
                <li className={(this.props.page === 'Centers') ? navItemClass.join(' ') : 'nav-item'}>
                  <button className="nav-link" >{this.props.centers}</button>
                </li>
              </Link>
              { this.isLoggedIn &&
                <Link to={`/events`}>
                  <li className={(this.props.page === 'Events') ? navItemClass.join(' ') : 'nav-item'}>
                    <button className="nav-link" >{this.props.events}</button>
                  </li>
                </Link>
              }
              <Link to={`/about`}>
                <li className={(this.props.page === 'About') ? navItemClass.join(' ') : 'nav-item'}>
                  <button className="nav-link">About</button>
                </li>
              </Link>
              { this.isAdmin &&
                <Link to={`/admin`}>
                <li className={(this.props.page === 'Admin') ? navItemClass.join(' ') : 'nav-item'}>
                  <button className="nav-link">{this.props.admin}</button>
                </li>
                </Link>
              }
              { this.isLoggedIn &&
                <Link to={`/centers/${this.props.id}`}>
                  <li className={(this.props.page === 'CenterDetails') ? navItemClass.join(' ') : 'nav-item'}>
                    <button className="nav-link" >{this.props.centerDetails}</button>
                  </li>
                </Link>
              }
              
            </ul>
            <Search searchForCenters={searchForCenters}/>
            <ul className="nav navbar-nav">
              { !this.isLoggedIn &&
                <li className="nav-item">
                  <button className="nav-link" data-toggle="modal" data-target="#logIn">{this.props.login}</button>
                </li>
              }
              { !this.isAdmin &&
                <li className="nav-item">
                  <button className="nav-link" data-toggle="modal" data-target="#signUp">{this.props.signup}</button>
                </li>
              }
              { this.isLoggedIn &&
                <Link to={`/logout`}> 
                  <li className="nav-item">
                    <button className="nav-link">{this.props.logout}</button>
                  </li>
                </Link>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  searchForCenters: PropTypes.func
}
