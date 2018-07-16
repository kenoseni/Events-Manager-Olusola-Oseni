import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Event from '../../components/Event';
import DeleteModal from '../../components/DeleteModal';
import ModifyEvent from '../../components/ModifyEvent';


global.localStorage = {
  getItem: key => key
};

configure({ adapter: new Adapter() });

describe('<Event />', () => {
  let props = {
    eventCenters: {
      allCenters: [],
    },
    event: {
      id: 6,
      name: 'Python quiz',
      startDate: '2019-04-04',
      endDate: '2019-05-05',
      time: '4 pm',
      centerId: 1
    },
    i: 4,
    history: {},
  };
  it('should render a <Event /> element', () => {
    const wrapper = shallow(<Event{...props} />
    );
    // console.log(wrapper.instance())
    expect(wrapper.instance().state).toEqual(null)
  });
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Event
      name={props.event.name}
      event={props.event}
      id={props.event.id}
      centerId={props.event.centerId}
      center={props.eventCenters.allCenters}
      i={props.i}
      {...props}
    />);
    //console.log(wrapper.instance())
    expect(wrapper.instance().props.event.name).toEqual('Python quiz');
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h4').at(0).text()).toBe('PYTHON QUIZ');
  });
  it('should render a <ModifyEvent /> element', () => {
    const wrapper = shallow(<ModifyEvent{...props} />
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().state.event.id).toBe(6);
    expect(wrapper.instance().state.event.name).toBe('Python quiz');
    expect(wrapper.instance().state.event.startDate).toBe('2019-04-04');
    expect(wrapper.instance().state.event.endDate).toBe('2019-05-05');
    expect(wrapper.instance().state.event.time).toBe('4 pm');
    expect(wrapper.instance().state.event.centerId).toBe('1');
  });
  it('should render a <DeleteModal /> element', () => {
    const mockdeleteCenter= jest.fn()
    const wrapper = shallow(<DeleteModal{...props}
      deleteCenter={mockdeleteCenter}
      title='Delete Event'/>
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().state).toBe(null);
    expect(wrapper.instance().props.title).toBe('Delete Event');
  });
});
