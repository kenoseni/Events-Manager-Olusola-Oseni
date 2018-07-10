import React, {Component} from 'react';
import AdminCenterEventsTable from './AdminCenterEventsTable';

class AdminCenterEvents extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {events} = this.props
    return (
      <div className="col-xs-12 col-md-8" id="etable">
        <div className="card w-70">
          <div className="card-body">
            <div className="table-wrapper-2">
              {/*<!--Table-->*/}
              <table className="table table-responsive">
                <thead className="mdb-color lighten-4">
                  <tr>
                    <th>#</th>
                    <th className="th-lg">Event Type</th>
                    <th className="th-lg">Start Date</th>
                    <th className="th-lg">End Date</th>
                    <th className="th-lg">Time</th>
                  </tr>
                </thead>
                <tbody>
                {(events === undefined ? null: events.map((event, i) => <AdminCenterEventsTable i={i+1} key={event.id} event={event}  />))}
                </tbody>
              </table>
              {/*<!--Table-->*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AdminCenterEvents;
