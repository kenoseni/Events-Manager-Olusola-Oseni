import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../../components/NotFound';
import Navbar from '../../components/Navbar';


configure({ adapter: new Adapter() });

describe('<NotFound />', () => {
  

  it('should render a <Navbar /> element', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find(Navbar)).toBeTruthy;
  });
  it('should contain an h1 tag', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('h1')).toBeTruthy;
    expect(wrapper.find('h1').length).toEqual(1)
  })
});
