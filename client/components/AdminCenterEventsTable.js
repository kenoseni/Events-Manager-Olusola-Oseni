import React, {Component} from 'react';

class AdminCenterEventsTable extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {event, i} = this.props
    return (
      <tr>
        <th scope="row">{i}</th> 
        <td>{event.name.toUpperCase()}</td>
        <td>{event.startDate}</td>
        <td>{event.endDate}</td>
        <td>{event.time}</td>
      </tr>
    )
  }
}
export default AdminCenterEventsTable;
