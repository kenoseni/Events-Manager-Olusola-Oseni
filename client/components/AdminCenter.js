import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DeleteModal from './DeleteModal';
import jwtDecode from 'jwt-decode';
import ModifyCenter from './ModifyCenter'


class AdminCenter extends Component {
  constructor(props) {
    super(props); 
  }

  componentWillMount() {
    let token = localStorage.getItem('x-access-token');
    if (token) {
      let decodedToken = jwtDecode(token);
      let isAdmin = decodedToken.isadmin;
      let role = decodedToken.userrole

      if(isAdmin) {
      this.isAdmin = true
      }
    }  
  }
  render () {
    const {center, i} = this.props
    return (
      <div className="col-md-4 mb-4">
        <div className="card w-40">
          <div className="view overlay hm-white-slight">
            <Link to={`/centers/${center.id}`}>
              <img src={center.image} className="img-fluid" alt={center.name} id="img-preview" style={{width:'100%', height:'250px'}} />
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-center">{center.name.toUpperCase()}</h5>
            <p className="card-text font-weight-bold ">Description: {center.description}</p>
            <p className="card-text font-weight-bold">Location: {center.location}</p>
            <p className="card-text font-weight-bold">Price: {center.price}</p>
            <p className="card-text font-weight-bold">Facilities: {center.facilities}</p>
            <p className="card-text font-weight-bold">Capacity: {center.capacity} guests</p>
            <p className="card-text font-weight-bold">
              Availability: 
              {(center.avaliability === true) ? 
                ' Center Available': 
                ' Currently not Available'
              } 
            </p>                                            
          </div>
          {this.isAdmin &&
            <div className="card-footer bg-transparent">
              <ul className="nav">
                <li>
                  <button data-toggle="modal" data-target={`#${center.id}`}>
                    <i className="fa fa-pencil-square-o fa-lg nav-link" aria-hidden="true"></i>
                  </button>
                </li>
                <li>
                  <button data-toggle="modal" data-target={`#${i}`}>
                    <i className="fa fa-trash-o float-right fa-lg nav-link" aria-hidden="true"></i>
                  </button>
                </li>
              </ul>
            </div>
          }
        </div>
        <ModifyCenter title='Modify Center' i={i} center={center} {...this.props} />
        <DeleteModal 
          title={`Are you sure you want to delete ${center.name} center?`} 
          i={i} 
          center={center} 
          {...this.props} 
        /> 
      </div>
    )
  }
}

export default AdminCenter;
