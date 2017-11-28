import React, {Component} from 'react';

export default class LandingPage extends Component {
  render () {
    return (
      <div>
          <div  id="intro" className="view hm-black-light">
            <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 text-center">
                  {/*Heading*/} 
                  <h2 id="pagetitle" className="display-3 font-bold white-text mb-2"><i>Encore</i> Group</h2>
                  {/*Divider*/} 
                  <hr className="hr-light" />
                  {/*Divider*/} 
                  <h5 id="slogan" className="my-3 text-center white-text">An elegant events company</h5>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}