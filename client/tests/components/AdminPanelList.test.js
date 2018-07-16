import React from 'react';
import { configure, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Connected, { AdminPanels } from '../../components/AdminPanels';
import AdminPanelList from '../../components/AdminPanelList';
import AdminPanel from '../../components/AdminPanel';

configure({ adapter: new Adapter() });

describe('<AdminPanelList />', () => {
  let props = {
    user: {
      count: 0,
      limit: 2
    },
    users: [],
    isAuthenticated: true,
    isAdmin: true,
    userDetails: {
      count: 0
    },
    history: {
      location: {
        search: '/page=1'
      }
    },
    match: {}
  }
  const wrapper = shallow(<AdminPanelList
    {...props}/>
  )
  it('should render a <AdminPanelList /> component', () => {
    console.log(wrapper.debug())
    expect(wrapper).toMatchSnapshot();
  });
})
