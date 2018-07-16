import React from 'react';
import { configure, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Connected, { AdminPanels } from '../../components/AdminPanels';
import AdminPanelList from '../../components/AdminPanelList';

configure({ adapter: new Adapter() });

const mockgetAllUsers = jest.fn();

describe('<AdminPanels />', () => {
  let props = {
    user: {
      users: {}
    },
    isAuthenticated: true,
    isAdmin: true,
    userDetails: {
      count: 0
    },
    history: {
      location: {
        search: '/page=1'
      }
    }
  }
  const wrapper = shallow(<AdminPanels
    count={props.userDetails.count}
    history={props.history}
    getAllUsers={mockgetAllUsers}
    {...props} />
  )
  it('should render a <AdminPanelList /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('it should call getAllUsers function', () => {
    wrapper.setProps({
      ...wrapper.props,
      isAuthenticated: false,
      isAdmin: false
    })
    expect(wrapper.find('.alert').length).toBe(1)
  });
});
