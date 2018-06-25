import React, {Component} from 'react';

class AdminPanelTable extends Component {
  constructor(props) {
    super(props);
    this.upgradeUserToAdmin = this.upgradeUserToAdmin.bind(this);
  }
  
  upgradeUserToAdmin (e) {
    e.preventDefault();
    this.props.upgradeUserToAdmin(this.props.user.id);
  }
  render () {
    const {user, i} = this.props
    const {events, centers} = this.props.user
    return (
      <tr>
        <th scope="row">{i}</th>
        <td>{user.id}</td>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.isAdmin.toString()}</td>
        <td>{user.role}</td>
        <td>{user.email}</td>
        <td><button onClick={this.upgradeUserToAdmin} type="button" className="btn btn-primary btn-sm my-0">UPGRADE</button></td>
      </tr>
    )
  }
}
export default AdminPanelTable;
