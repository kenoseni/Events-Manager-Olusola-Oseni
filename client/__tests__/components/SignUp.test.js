import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../../components/SignUp'


configure({ adapter: new Adapter() });

describe('<SignUp />', () => {
  const mockcreateUserfn = jest.fn();
  const mockaddFlashMessage = jest.fn();
  it('should render without throwing an error', () => {
    const wrapper = shallow(<SignUp
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage}
      />);
    expect(wrapper.find('div#signUp').exists()).toBe(true);
  });
  it('should render without throwing an error', () => {
    const wrapper = shallow(<SignUp 
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage}
      />);
    expect(wrapper.find('form#signup').exists()).toBe(true);
  });
  it('does not renders a firstname input', () => {
    const wrapper = shallow(<SignUp 
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage}
      />);
    expect(wrapper.find('#fname').length).toEqual(1)
  });
  it('does not renders a lastname input', () => {
    const wrapper = shallow(<SignUp 
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage}
      />);
    expect(wrapper.find('#lname').length).toEqual(1)
  });
  it('does not renders a email input', () => {
    const wrapper = shallow(<SignUp 
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage}
      />);
    expect(wrapper.find('#mail').length).toEqual(1)
  });
  it('does not renders a password input', () => {
    const wrapper = shallow(<SignUp 
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage}
      />);
    expect(wrapper.find('#pword').length).toEqual(1)
  });
  it('should click the login button and run a function', () => {
    const mockcreateUserfn = jest.fn();
    const wrapper = shallow(<SignUp 
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage} />);
    wrapper.find('#c-button').simulate(
      'click', 
     {preventDefault() {}},
    );
    expect(mockcreateUserfn.mock.calls.length).toBe(1)
  });
  
  it('should call onChange function', () => {
    const wrapper = shallow(<SignUp
      createUser={mockcreateUserfn}
      addFlashMessage={mockaddFlashMessage}
      />);
    wrapper.find('#fname').simulate(
      'change', 
      {target: 
        {name: 'firstname', value: 'olusola'}
      },
    );
    wrapper.find('#lname').simulate(
      'change', 
      {target: 
        {name: 'lastname', value: 'oseni'}
      },
    );
    wrapper.find('#mail').simulate(
      'change', 
      {target: 
        {name: 'email', value: 'olu@gmail.com'}
      },
    );
    wrapper.find('#pword').simulate(
      'change', 
      {target: 
        {name: 'password', value: '1234567890'}
      },
    );
    wrapper.find('#c-button').simulate(
      'click', 
     {preventDefault() {}},
    );
    expect(mockcreateUserfn.mock.calls.length).toBe(1)
    expect(mockcreateUserfn.mock.calls[0]).toEqual(
      [{firstname: 'olusola', lastname: 'oseni', email: 'olu@gmail.com', password: '1234567890'}]
    )
  });
});
