import React, {Component} from 'react';

class AdminPanelTable extends Component {

  render () {
    const {user, i} = this.props
    const {events, centers} = this.props.user
    return (
      <tr>
        <th scope="row">{i}</th>
        <td>{user.id}</td>
        <td>{event.name}</td>
        <td>{event.date}</td>
        <td>g</td>
        <td>{user.role}</td>
        <td>{user.email}</td>
        <td><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i> EDIT</td>
      </tr>
    )
  }
}
export default AdminPanelTable;
