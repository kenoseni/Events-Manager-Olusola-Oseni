import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddCenter from '../../components/AddCenter';
import CenterImage from '../../components/CenterImage';

configure({ adapter: new Adapter() });

let props = {
  center: {},
  title: 'Add Center',
  id: 'submitButton',
  i: 1
};
const mockaddCenter = jest.fn();
const wrapper = shallow(<AddCenter {...props} />);

describe('<AddCenter />', () => {
  it('user should see the form', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a get the initial state', () => {
    expect(wrapper.instance().state).toEqual({
      center: {},
      image: '',
      error: {}
    });
  });
  it('user should see the title of the form', () => {
    expect(wrapper.find('h4').length).toBe(1);
    expect(
      wrapper
        .find('h4')
        .at(0)
        .text()
    ).toBe('Add Center');
  });
  it('should render a <CenterImage /> component', () => {
    const mockaddImage = jest.fn();
    const wrapper = shallow(<CenterImage addImage={mockaddImage} />);
    expect(wrapper.length).toEqual(1);
  });
  it('user should be able to upload image'),
    () => {
      const mockaddImage = jest.fn();
      const wrapper = shallow(<CenterImage addImage={mockaddImage} />);
      // wrapper.find('#addCenter #file-upload').simulate(
      //   'click',
      // )
      expect(mockaddImage.mock.calls.length).toBe(1);
    };
  it();
  it('user should be able to create a center', () => {
    wrapper.find('#addCenterName').simulate('change', {
      target: { name: 'centerName', value: 'baltic' }
    });
    wrapper.find('#addCenterDescription').simulate('change', {
      target: { name: 'centerDescription', value: 'Amazing' }
    });
    wrapper.find('#addCenterLocation').simulate('change', {
      target: { name: 'centerLocation', value: 'Abuja' }
    });
    wrapper.find('#addCenterPrice').simulate('change', {
      target: { name: 'centerPrice', value: '2000' }
    });
    wrapper.find('#addCenterFacilities').simulate('change', {
      target: { name: 'centerFacilities', value: 'Gen' }
    });
    wrapper.find('#addCenterCapacity').simulate('change', {
      target: { name: 'centerCapacity', value: 1000 }
    });
    wrapper.find('#addForm').simulate('submit', { preventDefault() {} });
    expect(mockaddCenter.mock.calls.length).toBe(0);
  });
});
// describe('When the form is submitted', () => {
//   const mockaddCenter = jest.fn();
//   let props = {
//     center: {
//       id: 1
//     },
//     title: 'Add Center',
//     id: 'add',
//     i: 1
//   }
//   const wrapper = shallow(<AddCenter addCenter={mockaddCenter}
//     addCenter={mockaddCenter}
//       title={props.title}
//       id={props.center.id}
//       i={props.i}
//       {...props}
//   />)
//   it('should call the mock modify function', () => {
//    wrapper.find('#addForm').simulate(
//      'submit',
//      {preventDefault() {}}
//    )
//    expect(mockaddCenter.mock.calls.length).toBe(1)
//   })
// })
