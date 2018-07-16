import React from 'react';
import { configure, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import AddEvent from '../../components/AddEvent';

configure({ adapter: new Adapter() });

const mockaddEvent = jest.fn();
const mockisValid = jest.fn();
const mockaddUserEvent = jest.fn();
let props = {
  eventCenters: {
    allCenters: []
  }
};
const wrapper = shallow(<AddEvent addEvent={mockaddEvent} {...props} />);

describe('<AddEvent />', () => {
  it('should render a <AddEvent /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('should call the isValid once', () => {
  //   const spy = sinon.spy(wrapper.instance(), 'isValid')
  //   wrapper.instance().isValid()
  //   expect(mockisValid).toHaveBeenCalledTimes(1)
  // });
  //   it('it should call getAllUsers function', () => {
  //     wrapper.setProps({
  //       eventCenters: {
  //         allCenters: [
  //           {
  //             id: 4,
  //             name : 'cincinati',
  //             description: 'you should knw',
  //             location: 'Lagos',
  //             price: '100000',
  //             capacity: 1000,
  //             image: ''
  //           }
  //         ]
  //       }
  //     })
  //     expect(wrapper.find('.alert').length).toBe(1);

  it('it should call addUserEvent function', () => {
    wrapper.state({
      value: 'Choose a Center',
      event: {},
      allCenters: [],
      error: {}
    });
    wrapper.setState({
      ...wrapper.state,
      event: {
        name: 'me',
        centerId: '1',
        startDate: '2018-07-15',
        endDate: '2018-07-16',
        time: '4 pm'
      }
    });
  });

  // const spy = sinon.spy(wrapper.instance(), 'addUserEvent');
  // wrapper.instance().addUserEvent();
  // expect(mockaddUserEvent).toHaveBeenCalledTimes(1);
});

// // describe('componenentWillReceiveProps', () => {
// //   it('should set a new state after receiving new props', () => {
// //     sinon.spy(wrapper, 'addUserEvent');
// //     wrapper.setProps({
// //       ...wrapper.props.eventCenters.allCenters,
// //       allCenters: ['big', 'small']
// //     });
// //     expect(addUserEvent).toBeCalled(1);
// //   });
// });
