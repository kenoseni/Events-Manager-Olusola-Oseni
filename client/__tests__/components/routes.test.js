import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Routes } from '../../routes';
import Navbar from '../../components/Navbar';


configure({ adapter: new Adapter() });

describe('<Routes />', () => {
  it('should render a <Routes /> element', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.length).toEqual(1);
  });
});