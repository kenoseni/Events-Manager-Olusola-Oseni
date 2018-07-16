import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AdminCenters } from '../../components/AdminCenters';
import AdminCenterList from '../../components/AdminCenterList';
import AddCenter from '../../components/AddCenter';
import AddCenterModalButton from '../../components/AddCenterModalButton';
import Pages from '../../components/Pages';

global.localStorage = {
  getItem: key => key
};

configure({ adapter: new Adapter() });

describe('<AdminCenters />', () => {
  const mockaddCenter = jest.fn();
  const mockdeleteCenter = jest.fn();
  const mockmodifyCenter = jest.fn();
  const mockgetCenters = jest.fn();
  let props = {
    eventCenters: {
      centers: []
    },
    isAuthenticated: false,
    isAdmin: true,
    image: '',
    match: {},
    count: 30,
    limit: 6,
    history: {
      location: {
        pathname: '/centers',
        search: ''
      }
    },
    title: 'Add Center'
  };
  it('should render a <AdminCenters /> element', () => {
    const wrapper = shallow(
      <AdminCenters
        addCenter={mockaddCenter}
        deleteCenter={mockdeleteCenter}
        modifyCenter={mockmodifyCenter}
        getCenters={mockgetCenters}
        {...props}
      />
    );
    expect(wrapper.instance().props.isAuthenticated).toEqual(false);
    expect(wrapper.instance().props.isAdmin).toEqual(true);
    expect(wrapper.instance().props.match).toEqual({});
    expect(wrapper.instance().props.image).toEqual('');
    expect(wrapper.instance().state).toEqual(null);
    expect(wrapper.instance().props.addCenter).toBeCalled;
    expect(wrapper.instance().props.deleteCenter).toBeCalled;
    expect(wrapper.instance().props.modifyCenter).toBeCalled;
    expect(wrapper.instance().props.getCenters).toBeCalled;
  });
  it('should render a <AdminCenterList /> element', () => {
    const wrapper = shallow(
      <AdminCenterList {...props} centers={props.eventCenters.centers} />
    );
    expect(wrapper.instance().props.match).toEqual({});
  });
  it('should render a <AddCenter /> element', () => {
    const wrapper = shallow(
      <AddCenter {...props} title={props.title} addCenter={mockaddCenter} />
    );
    expect(wrapper.instance().props.match).toEqual({});
    expect(wrapper.instance().props.title).toEqual('Add Center');
    expect(wrapper.instance().state.center).toEqual({});
    expect(wrapper.instance().state.image).toEqual('');
    expect(wrapper.instance().state.error).toEqual({});
  });
  it('should render a <AddCenterModalButton /> ', () => {
    const wrapper = shallow(<AddCenterModalButton {...props} />);
    expect(wrapper.length).toEqual(1);
  });
  it('should render a <Pages /> component', () => {
    const wrapper = shallow(
      <Pages {...props} count={props.count} limit={props.limit} />
    );
    expect(wrapper.length).toEqual(1);
  });
});
