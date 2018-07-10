import React from 'react';
import { configure, shallow } from 'enzyme';
import {spy} from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import DeleteModal from '../../components/DeleteModal';


configure({ adapter: new Adapter() });

describe('<DeleteModal />', () => {
  const mockdeleteCenter = jest.fn(cb => cb(null, true));
  const mockdeleteEvent = jest.fn()
  let props = {
    event: {
      id: 1
    },
    title: 'Delete Baltic',
    id: 1,
    i: 1
  }
  
  it('should render a <DeleteModal /> element', () => {
    const wrapper = shallow(<DeleteModal
      deleteCenter={mockdeleteCenter}
      deleteEvent={mockdeleteEvent}
      {...props} />
    );
    expect(wrapper.instance().state).toEqual(null)
    expect(wrapper.instance().props.deleteCenter).toBeCalled
    expect(wrapper.instance().props.deleteEvent).toBeCalled
  });
  it('should render contain a delete button', () => {
    const wrapper = shallow(<DeleteModal
      deleteCenter={mockdeleteCenter}
      deleteEvent={mockdeleteEvent}
      id={props.id}
      {...props} />
    );
    // (wrapper.find('#deleteButtion')).simulate(
    //   'click', 
    //  {preventDefault() {}},
    // );
  });
});
