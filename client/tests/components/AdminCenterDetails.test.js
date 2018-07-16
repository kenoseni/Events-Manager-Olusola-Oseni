import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SearchPage} from '../../components/SearchPage';
import { AdminCenterDetails} from '../../components/AdminCenterDetails';

configure({ adapter: new Adapter() });
const mockgetOneCenter = jest.fn()
const mocksearchForCenters = jest.fn()

let props = {

  eventCenters: {
      center: {}
  },
  match: {
      params: '1'
  }
}

const wrapper = shallow(<AdminCenterDetails
  getOneCenter={mockgetOneCenter}
  searchForCenters={mocksearchForCenters}
  {...props}
/>)

describe('<AdminCenterDetails />', () => {
  it('should render a <AdminCenterDetails /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
