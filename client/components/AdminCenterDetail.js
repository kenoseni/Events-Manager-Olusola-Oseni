import React, {Component} from 'react';
import {link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as centerActions  from '.././actions/CenterActions'
import { eventCenters } from '.././reducers/';
import Navbar2 from './Navbar2';
import AdminCenterEvents from './AdminCenterEvents'

class AdminCenterDetail extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { center } = this.props;
    return (
      <div>
        <Navbar2 />
        <main>
          <div className="container">
            <div className="row" id="info">
              <div className="col-xs-12 col-md-4">
                <div className="card w-40">  
                  {/*<!--Card image-->*/}
                  <div className="view overlay hm-white-slight">
                    <img src="./img2.jpg" className="img-fluid" alt={center.name} style={{width: '100%', height: '250px'}} />
                  </div>   
                  {/*<!--Card content-->*/}
                  <div className="card-body">
                    {/*<!--Title-->*/}
                    <h5 className="card-title font-weight-bold text-center">{(center.name === undefined ? null: center.name.toUpperCase())}</h5>
                    {/*<!--Text-->*/}
                    <p className="card-text"></p>
                  </div>     
                </div>
                {/*<!--/.Card-->*/}   
              </div>
              <div className="col-xs-12 col-md-8" id="paradise">
                <div className="card" >
                  <div className="card-header text-right">
                    Details 
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Description</h4>
                    <h5 className="card-text">{center.description}</h5>
                    <hr />
                    <h4 className="card-text">Facilities</h4>
                    <ul>
                      <li>{center.facilities}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="space">
              <div className="col-xs-12 col-md-4" id="space2">
                <div className="card w-40">  
                  {/*<!--Card image-->*/}
                  <div className="view overlay hm-white-slight">
                    <img src="./img1.jpg" className="img-fluid" alt={center.name} style={{width: '100%', height: '250px'}} />
                  </div>   
                </div>
                {/*<!--/.Card-->*/}
              </div>
              <AdminCenterEvents/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default AdminCenterDetail;
