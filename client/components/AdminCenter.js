import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class AdminCenter extends Component {
  constructor(props) {
    super(props); 
  }
  render () {
    const {center, i} = this.props
    return (
      <div className="col-md-4 mb-4">
        <div className="card w-40">
          <div className="view overlay hm-white-slight">
            <Link to={`/centers/${center.id}`}>
              <img src="./img1.jpg" className="img-fluid" alt={center.name} style={{width:'100%', height:'250px'}} />
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
                'Center Available': 
                'Currently not Available'
              } 
            </p>                                            
          </div>
        </div> 
      </div>
    )
  }
}

export default AdminCenter;
