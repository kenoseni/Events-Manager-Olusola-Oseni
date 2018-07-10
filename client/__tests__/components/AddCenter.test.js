import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddCenter from '../../components/AddCenter';
import CenterImage from '../../components/CenterImage';

configure({ adapter: new Adapter() });

describe('<AddCenter />', () => {
  const mockaddCenter = jest.fn();
  let props = {
    center: {
      id: 1
    },
    title: 'Add Center',
    id: 'submitButton',
    i: 1
  }
  
  it('should render a <AddCenter /> element', () => {
    const wrapper = shallow(<AddCenter
      addCenter={mockaddCenter}
      id={props.center.id}
      {...props} />
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().state).toEqual({ center: {}, image: '', error: {} })
  });
  it('should render a <AddCenter /> title', () => {
    const wrapper = shallow(<AddCenter
      addCenter={mockaddCenter}
      title={props.title}
      id={props.center.id}
      i={props.i}
      {...props} />
    );
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h4').at(0).text()).toBe('Add Center');
  });
  it('should render a <CenterImage /> element', () => {
    const mockaddImage = jest.fn();
    const wrapper = shallow(<CenterImage
      addImage={mockaddImage}
      />
    );
    expect(wrapper.instance().state).toEqual(null)
  });
  it('should call onChange function', () => {
    const wrapper = shallow(<AddCenter
      addCenter={mockaddCenter}
      title={props.title}
      id={props.center.id}
      i={props.i}
      {...props}
      />);
      //console.log(wrapper.debug())

    wrapper.find('#addCenterName').simulate(
      'change', 
      {target: 
        {name: 'centerName', value: 'baltic'}
      },
    );
    wrapper.find('#addCenterDescription').simulate(
      'change', 
      {target: 
        {name: 'centerDescription', value: 'Amazing'}
      },
    );
    wrapper.find('#addCenterLocation').simulate(
      'change', 
      {target: 
        {name: 'centerLocation', value: 'Abuja'}
      },
    );
    wrapper.find('#addCenterPrice').simulate(
      'change', 
      {target: 
        {name: 'centerPrice', value: '2000'}
      },
    );
    wrapper.find('#addCenterFacilities').simulate(
      'change', 
      {target: 
        {name: 'centerFacilities', value: 'Gen'}
      },
    );
    wrapper.find('#addCenterCapacity').simulate(
      'change', 
      {target: 
        {name: 'centerCapacity', value: 1000 }
      },
    );
    wrapper.find('#addForm').simulate(
      'submit', 
     {preventDefault() {}},
    );
    expect(mockaddCenter.mock.calls.length).toBe(0)
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
