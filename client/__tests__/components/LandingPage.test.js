import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LandingPage } from '../../components/LandingPage';
import Navbar from '../../components/Navbar';
import SignUp from '../../components/SignUp'
import SignIn from '../../components/SignIn'


configure({ adapter: new Adapter() });

global.localStorage = {
  getItem: key => key
};

describe('<LandingPage />', () => {
  const mockcreateUser = jest.fn();
  const mockaddFlashMessage = jest.fn();
  const mockearchForCenters = jest.fn();
  it('should render a <LandingPage /> element', () => {
    const wrapper = shallow(<LandingPage
      createUser={mockcreateUser}
      addFlashMessage={mockaddFlashMessage}
      searchForCenters={mockearchForCenters}

    />);
    expect(wrapper.find(Navbar)).toBeTruthy;
    expect(wrapper.find(SignUp)).toBeTruthy;
    expect(wrapper.find(SignIn)).toBeTruthy;
  });
  it('should pass the mock function as the signin prop', () => {
    let wrapper;
    const mockSigninfn = jest.fn();
    beforeEach(() => {
      // pass the mock function as the login prop 
      wrapper = shallow(<SignIn userLogin={mockSigninfn}/>)
      wrapper.find('form#loginform').simulate(
        'submit', 
        {preventDefault() {}}
      )
      expect(mockSigninfn.mock.calls.length).toBe(1)
    })
  });
  // it('should render a <LandingPage /> element', () => {
  //   const wrapper = shallow(<Navbar home='home'/>);
  //   expect(wrapper.text()).toEqual('home');
  // });
});
