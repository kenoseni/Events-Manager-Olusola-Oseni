import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AdminPanelTable from './AdminPanelTable';

class AdminPanel extends Component {
  
  render () {
    const {users, match} = this.props
    return (
      <div className="container">
        <div className="row" id="">
          <div className="col-xs-12 col-md-1"></div>
          <div className="col-xs-12 col-md-10" id="etable">
              <div className="card w-40">
                <div className="card-body">
                  <div className="table-wrapper-2">
                    {/*<!--Table-->*/}
                    <table className="table table-hover table-responsive">
                      <thead className="mdb-color lighten-4">
                        <tr>
                          <th>#</th>
                          <th className="th-lg">ID</th>
                          <th className="th-lg">EVENT NAME</th>
                          <th className="th-lg">DATE</th>
                          <th className="th-lg">CENTER</th>
                          <th className="th-lg">ROLE</th>
                          <th className="th-lg">EMAIL</th>
                          <th className="th-lg"></th>
                        </tr>
                      </thead>
                      <tbody>
                      { (users) ? 
                          users.map((user, i) => <AdminPanelTable {...this.props} key={i} i={i +1} user={user}  />)
                          : null
                      }
                      </tbody>
                    </table>
                    {/*<!--Table-->*/}
                  </div>
                </div>
              </div>
           </div>
          <div className="col-xs-12 col-md-1"></div>
        </div>
      </div>
    )
  }
}

export default AdminPanel;
