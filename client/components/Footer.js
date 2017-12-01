import React, {Component} from 'react';

export default class Footer extends Component {
  render () {
    return (
      <footer className="page-footer indigo center-on-small-only pt-0">
        {/*<!--Footer Links-->*/}
        <div className="container">
          {/*<!--First row-->*/}
          <div className="row">
            {/*<!--First column-->8*/}
            <div className="col-md-12">
              <div className="footer-socials mb-5 flex-center">
                {/*<!--Facebook-->*/}
                <a className="icons-sm fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                {/*<!--Twitter-->*/}
                <a className="icons-sm tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                {/*<!--Google +-->*/}
                <a className="icons-sm gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-4"> </i></a>
                {/*<!--Linkedin-->*/}
                <a className="icons-sm li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-4"> </i></a>
                {/*<!--Instagram-->*/}
                <a className="icons-sm ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                {/*<!--Pinterest-->*/}
                <a className=""><i></i></a>
              </div>
            </div>
            {/*<!--/First column-->*/}
          </div>
          {/*<!--/First row-->*/}
        </div>
        {/*<!--/Footer Links-->*/}
        {/*<!--Copyright-->*/}
        <div className="footer-copyright">
          <div className="container-fluid">
            © 2017 Copyright: <a href="index.html"> encoregroup.com </a>
          </div>
        </div>
        {/*<!--/Copyright-->*/}
      </footer>
    )
  }
}
