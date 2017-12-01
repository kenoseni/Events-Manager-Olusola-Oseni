import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Navbar2 from './Navbar2';
import Footer from './Footer';
import * as getCenters from '.././actions/UserActions'
import centerReducer from '.././reducers/CenterReducer'



class Eventcenters extends Component {
  constructor() {
    super();
    this.state = {
      name: '' ,
      description: '' ,
      location: '' ,
      address:'' ,
      id: '' ,
      capacity: '',
      avaliability: ''
    }
  }
  componentWillMount() {
    this.props.getCenters(this.props);
  }

  render () {
    const {centerReducer} = this.props;
    for(let x of centerReducer){
      console.log(x)
    }
    return (
      <div>
        <Navbar2 />
        <main>
          <div className="container">
            
            <div className="row" id="centers">
              {centerReducer.map((center) => {
                return (
                  
                  <div className="col-md-4 mb-4">
                    
                    <div className="card w-40">
                     
                      <div className="view overlay hm-white-slight">
                        <img src="components/img/img1.jpg" className="img-fluid" alt="Emerald Enclave" style={{width: + '100%', height: + '250px'}} />
                      </div>
                     
                      <div className="card-body">
                        
                        <h5 className="card-title font-weight-bold text-center">{center.name}</h5>
                        <p className="card-text">Description: {center.description}</p>
                        <p className="card-text">Location: {center.location}</p>
                        <p className="card-text">Address: {center.address}</p>
                        <p className="card-text">Location: {center.capacity}</p>
                        <p className="card-text">Avalaibility: {center.avaliability.toString()}</p>
                                                                        
                      </div>
                    </div>
                    
                  </div>
                  
                )
              })}
            </div>  
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  centerReducer: state.center
});

const mapDispatchToProps = (dispatch) => bindActionCreators(getCenters, dispatch)
const Eventcenter = connect(mapStateToProps, mapDispatchToProps)(Eventcenters);

export default Eventcenter;

