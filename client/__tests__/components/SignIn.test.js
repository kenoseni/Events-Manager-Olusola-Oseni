import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from '../../components/SignIn'
import Navbar from '../../components/Navbar';


configure({ adapter: new Adapter() });

describe('<SignIn />', () => {
  const mockUserLoginfn = jest.fn();
  it('should render without throwing an error', () => {
    const wrapper = shallow(<SignIn userLogin={mockUserLoginfn}/>);
    expect(wrapper.find('div#logIn').exists()).toBe(true);
  });
  it('should render without throwing an error', () => {
    const wrapper = shallow(<SignIn userLogin={mockUserLoginfn}/>);
    expect(wrapper.find('form#loginform').exists()).toBe(true);
  });
  it('does not renders a email input', () => {
    const wrapper = shallow(<SignIn userLogin={mockUserLoginfn}/>);
    expect(wrapper.find('.eeemail').length).toEqual(1)
  });
  it('does not renders a password input', () => {
    const wrapper = shallow(<SignIn userLogin={mockUserLoginfn}/>);
    expect(wrapper.find('.pwd').length).toEqual(1)
    // expect(wrapper.instance.userLogin).toBeFalsy;
  });
  // it('should render a signin form', () => {
  //   const wrapper = shallow(<Navbar />);
  //   expect(wrapper.find(Navbar).prop('Log In')).toEqual(true);
  // });
  it('should click the login button and run a function', () => {
    const wrapper = shallow(<SignIn userLogin={mockUserLoginfn} />);
    wrapper.find('#l-button').simulate(
      'click', 
     {preventDefault() {}},
    );
    expect(mockUserLoginfn.mock.calls.length).toBe(1)
  });
  it('should call onChange function', () => {
    const wrapper = shallow(<SignIn userLogin={mockUserLoginfn} />);
    wrapper.find('.eeemail').simulate(
      'change', 
      {target: 
        {name: 'email', value: 'olu@gmail.com'}
      },
    );
    wrapper.find('.pwd').simulate(
      'change', 
      {target: 
        {name: 'password', value: '1234567890'}
      },
    );
    wrapper.find('#l-button').simulate(
      'click', 
     {preventDefault() {}},
    );
    // expect(mockUserLoginfn.mock.calls[0]).toEqual(
    //   [{email: 'olu@gmail.com', password: '1234567890'}]
    // )
  });
});
