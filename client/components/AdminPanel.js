import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminPanelTable from './AdminPanelTable';
import Pages from './Pages';

class AdminPanel extends Component {
  render() {
    const { users, match, history, count, limit, userDetails } = this.props;
    return (
      <div className="container">
        <div className="row" id="">
          <div className="col-xs-12 col-md-0" />
          <div className="col-xs-12 col-md-12" id="etable">
            <div className="card w-40">
              <div className="card-body">
                <div className="table-wrapper">
                  <h3 id="appusers">Users</h3>
                  {/*<!--Table-->*/}
                  <table className="table table-hover table-responsive">
                    <thead className="blue-grey text-white lighten-1">
                      <tr>
                        <th>#</th>
                        <th className="th-lg">ID</th>
                        <th className="th-lg">FIRST NAME</th>
                        <th className="th-lg">LAST NAME</th>
                        <th className="th-lg">ISADMIN</th>
                        <th className="th-lg">ROLE</th>
                        <th className="th-lg">EMAIL</th>
                        {userDetails.userrole === 'superadmin' && (
                          <th className="th-lg">ACTION</th>
                        )}
                        {userDetails.userrole === 'admin' && (
                          <th className="th-lg" />
                        )}
                      </tr>
                    </thead>
                    <tbody id="adminpaneltable">
                      {users
                        ? users.map((user, i) => (
                            <AdminPanelTable
                              {...this.props}
                              key={i}
                              i={i + 1}
                              user={user}
                            />
                          ))
                        : null}
                    </tbody>
                  </table>
                  {/*<!--Table-->*/}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span className="count">
                        {users
                          ? `1 - ${users.length} of ${users.length}`
                          : null}
                      </span>
                      <span>
                        {count !== undefined && (
                          <Pages
                            count={count}
                            history={history}
                            limit={limit}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-0" />
        </div>
      </div>
    );
  }
}

export default AdminPanel;
