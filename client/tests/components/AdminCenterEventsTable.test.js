import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminCenterEventsTable from '../../components/AdminCenterEventsTable';

configure({ adapter: new Adapter() });

let props = {
  event: {
    name: 'Python quiz',
    startDate: '2018-12-04',
    endDate: '2018-12-05',
    time: '4 pm'
  },
  i: 1
}

const wrapper = shallow(<AdminCenterEventsTable
  {...props}
/>)

describe('<AdminCenterEventsTable />', () => {
  it('should render a <AdminCenterEventsTable /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
