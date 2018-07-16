import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminCenterDetail from '../../components/AdminCenterDetail';

configure({ adapter: new Adapter() });
const mocksearchForCenters = jest.fn()

let props = {
  center: {},
  id: 1,
  center: {
      events: []
  }
}

const wrapper = shallow(<AdminCenterDetail
  searchForCenters={mocksearchForCenters}
  {...props}
/>)

describe('<AdminCenterDetails />', () => {
  it('should render a <AdminCenterDetail /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
