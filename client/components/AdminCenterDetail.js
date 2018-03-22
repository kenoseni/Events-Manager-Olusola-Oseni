import React, {Component} from 'react';
import {link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as centerActions  from '.././actions/CenterActions'
import { eventCenters } from '.././reducers/';
import NavBar from './NavBar';
import AdminCenterEvents from './AdminCenterEvents'

class AdminCenterDetail extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { center, id } = this.props;
    const { events } = this.props.center

    return (
      <div>
        <NavBar home='Home' centers='Centers' events='Events' centerDetails='CenterDetails' page='CenterDetails' id={id} />
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
                    <h5 className="card-title">Description</h5>
                    <h6 className="card-text">{center.description}</h6>
                    <hr />
                    <h5 className="card-title">Location</h5>
                    <h6 className="card-text">{center.location}</h6>
                    <hr />
                    <h5 className="card-title">Price</h5>
                    <h6 className="card-text">{center.price}</h6>
                    <hr />
                    <h5 className="card-title">Capacity</h5>
                    <h6 className="card-text">{center.capacity} guests</h6>
                    <hr />
                    <h5 className="card-title">Facilities</h5>
                    <h6 className="card-text">{center.facilities}</h6>
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
              <AdminCenterEvents events={events}/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default AdminCenterDetail;
