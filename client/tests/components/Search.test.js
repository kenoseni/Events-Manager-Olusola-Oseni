import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Connected, { AdminPanels } from '../../components/AdminPanels';
import Search from '../../components/Search';

configure({ adapter: new Adapter() });
const mockupdateSearchInput = jest.fn();
const mocksubmitForm = jest.fn();
const mocksearchForCenters = jest.fn();
describe('<Search />', () => {
  let props = {
    path: '/',
    history: {
      push: '/'
    }
  };
  const e = {
    preventDefault: jest.fn(),
    target: {
      value: ''
    }
  };
  const wrapper = shallow(
    <Search searchForCenters={mocksearchForCenters} {...props} />
  );
  it('should render a <Search /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('should call the submitform function', () => {
  //   const spy = sinon.spy(wrapper.instance(), 'submitForm');
  //   wrapper.instance().submitForm(e);
  //   expect(mocksubmitForm).toHaveBeenCalledTimes(1);
  // });
});
