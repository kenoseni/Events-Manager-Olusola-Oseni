import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignOut } from '../../components/SignOut';
import Navbar from '../../components/Navbar';


configure({ adapter: new Adapter() });

describe('<SignOut />', () => {
  it('should render a <SignOut /> element', () => {
    const mockSignoutfn = jest.fn();
    const wrapper = shallow(<SignOut signout={mockSignoutfn}/>);
    expect(wrapper.find('div')).toBeUndefined;
  });
});
