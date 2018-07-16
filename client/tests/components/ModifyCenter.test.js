import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModifyCenter from '../../components/ModifyCenter';
import CenterImage from '../../components/CenterImage';

configure({ adapter: new Adapter() });
global.window = window

describe('<ModifyCenter />', () => {
  const mockmodifyCenter = jest.fn();
  let props = {
    center: {
      id: 1
    },
    title: 'Modify Center',
    id: 'modify',
    i: 1
  }
  
  it('should render a <ModifyCenter /> element', () => {
    const wrapper = shallow(<ModifyCenter
      modifyCenter={mockmodifyCenter}
      id={props.center.id}
      {...props} />
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().state).toEqual({'center': {'id': 1}, 'error': {}})
  });
  it('should render a <ModifyCenter /> title', () => {
    const wrapper = shallow(<ModifyCenter
      modifyCenter={mockmodifyCenter}
      title={props.title}
      id={props.center.id}
      i={props.i}
      {...props} />
    );
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h4').at(0).text()).toBe('Modify Center');
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
    const wrapper = shallow(<ModifyCenter
      modifyCenter={mockmodifyCenter}
      title={props.title}
      id={props.center.id}
      i={props.i}
      {...props}
      />);
      //console.log(wrapper.instance())

    wrapper.find('#modifiedCenterName').simulate(
      'change', 
      {target: 
        {name: 'name', value: 'baltic'}
      },
    );
    wrapper.find('#modifiedCenterDescription').simulate(
      'change', 
      {target: 
        {name: 'description', value: 'Amazing'}
      },
    );
    wrapper.find('#modifiedCenterLocation').simulate(
      'change', 
      {target: 
        {name: 'location', value: 'Abuja'}
      },
    );
    wrapper.find('#modifiedCenterPrice').simulate(
      'change', 
      {target: 
        {name: 'price', value: '2000'}
      },
    );
    wrapper.find('#modifiedCenterFacilities').simulate(
      'change', 
      {target: 
        {name: 'facilities', value: 'Gen'}
      },
    );
    wrapper.find('#modifiedCenterCapacity').simulate(
      'change', 
      {target: 
        {name: 'capacity', value: 1000 }
      },
    );
    wrapper.find('#modifyForm').simulate(
      'click', 
     {preventDefault() {}},
    );
    expect(mockmodifyCenter.mock.calls.length).toBe(0)
  });
});
describe('When the form is submitted', () => {
  const mockmodifyCenter = jest.fn();
  let props = {
    center: {
      id: 1
    },
    title: 'Modify Center',
    id: 'modify',
    i: 1
  }
  const wrapper = shallow(<ModifyCenter modifyCenter={mockmodifyCenter}
    modifyCenter={mockmodifyCenter}
      title={props.title}
      id={props.center.id}
      i={props.i}
      {...props}
  />)
  it('should call the mock modify function', () => {
   wrapper.find('#modifyForm').simulate(
     'submit', 
     {preventDefault() {}}
   )
   expect(mockmodifyCenter.mock.calls.length).toBe(0)
  })
})
