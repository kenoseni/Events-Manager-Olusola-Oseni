import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminCenterEvents from '../../components/AdminCenterEvents';

configure({ adapter: new Adapter() });

let props = {
  events: []
}

const wrapper = shallow(<AdminCenterEvents
  {...props}
/>)

describe('<AdminCenterDetails />', () => {
  it('should render a <AdminCenterEvents /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('it should  not return null if events is undefined', () => {
    wrapper.setProps({
      ...wrapper.props,
      events: undefined
      
    })
    expect(wrapper.find('tbody').at(0).text()).toBeNull
  });
  it('it should  render AdminCenterEventsTable if events is not undefined', () => {
    wrapper.setProps({
      ...wrapper.props,
      events: ['quiz', 'seminar']
      
    })
    expect(wrapper.find('AdminCenterEventsTable').exists()).toBeTruthy()
  });
})
