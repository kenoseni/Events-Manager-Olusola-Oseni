import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Connected, { AdminPanels } from '../../components/AdminPanels';
import AdminPanelTable from '../../components/AdminPanelTable';

configure({ adapter: new Adapter() });
const e = {
  preventDefault() {}
}
describe('<AdminPanelTableList />', () => {
  const mockupgradeUserToAdmin = jest.fn()
  let props = {
    user: {
      events: {},
      centers: {},
      isAdmin: true
    },
    userDetails: {
      userrole: 'superadmin'
    },
  }
  const wrapper = shallow(<AdminPanelTable
    upgradeUserToAdmin={mockupgradeUserToAdmin}
    {...props} />
  )
  it('should render a <AdminPanelTable /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call the upgradeUserToAdmin once', () => {
    const spy = sinon.spy(wrapper.instance(), 'upgradeUserToAdmin')
    wrapper.instance().upgradeUserToAdmin(e)
    expect(mockupgradeUserToAdmin).toHaveBeenCalledTimes(1)
  });
  it('it should render the Upgrade button if user is superadmin', () => {
    expect(wrapper.find('td').exists()).toBeTruthy()
  });
});
