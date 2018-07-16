import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Connected, { AdminPanels } from '../../components/AdminPanels';
import AdminPanel from '../../components/AdminPanel';
import AdminPanelTable from '../../components/AdminPanelTable';

configure({ adapter: new Adapter() });

describe('<AdminPanel />', () => {
  let props = {
    users: [],
    match: {},
    count: 1,
    userDetails: {
      userrole: 'user'
    },
    history: {
      location: {
        search: ''
      }
    },
    limit: 1
  }
  const wrapper = shallow(<AdminPanel
    
    {...props} />
  )
  it('should render a <AdminPanel /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('it should render Action column if user is superadmin', () => {
    wrapper.setProps({
      ...wrapper.props,
      userDetails: {
        userrole: 'superadmin',
      }
      
    })
    expect(wrapper.find('.th-lg').at(6).text()).toBe('ACTION')
  });
  it('it should  not render the Action column if user is superadmin', () => {
    wrapper.setProps({
      ...wrapper.props,
      userDetails: {
        userrole: 'admin',
      }
      
    })
    expect(wrapper.find('.th-lg').at(6).text()).toBe('')
  });
  it('it should  not render <AdminPanelTable />', () => {
    wrapper.setProps({
      ...wrapper.props,
      userDetails: {
        userrole: 'admin',
      }
      
    })
    expect(wrapper.find('.th-lg').at(6).text()).toBe('')
  });
  it('it should  not render <AdminPanelTable />', () => {
    
    expect(wrapper.find('tbody')).toBeTruthy()
  });
  it('it should  not return null if users is undefined', () => {
    wrapper.setProps({
      ...wrapper.props,
      users: undefined
      
    })
    expect(wrapper.find('tbody').at(0).text()).toBeNull
  });
  it('it should render AdminPanelTable if users is not undefined', () => {
    wrapper.setProps({
      ...wrapper.props,
      users: ['egg', 'ball']
      
    })
    expect(wrapper.find('AdminPanelTable').exists()).toBeTruthy()
  });
});
