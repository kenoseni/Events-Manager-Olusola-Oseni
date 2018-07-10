import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Events } from '../../components/Events';
import EventList from '../../components/EventList';
import AddEvent from '../../components/AddEvent';
import Pages from '../../components/Pages';
import AddEventModalButton from '../../components/AddEventModalButton'

global.localStorage = {
  getItem: key => key
};

configure({ adapter: new Adapter() });

describe('<Events />', () => {
  const mockaddEvent = jest.fn();
  const mockdeleteEvent = jest.fn();
  const mockgetAllCenters = jest.fn();
  const mockallUserEvents = jest.fn();
  const mockdeleteFlashMessage = jest.fn();
  const mockmodifyEvent = jest.fn();
  let props = {
    eventCenters: { 
      centers: [],
    },
    userEvents: {
      events: [],
      count: 30,
      limit: 6,
    },
    messages: ['Welcome'],
    history: {
      location: {
        pathname: '/events',
        search: ''
      }
    },
    title: 'Add Event'
  }
  it('should render a <Events /> element', () => {
    const wrapper = shallow(<Events
      events={props.userEvents.events}
      addEvent={mockaddEvent}
      deleteEvent={mockdeleteEvent}
      modifyEvent={mockmodifyEvent}
      allUserEvents={mockallUserEvents}
      deleteFlashMessage={mockdeleteFlashMessage}
      getAllCenters={mockgetAllCenters}
      {...props} />
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().state).toEqual(null)
    expect(wrapper.instance().props.addEvent).toBeCalled
    expect(wrapper.instance().props.deleteEvent).toBeCalled
    expect(wrapper.instance().props.modifyEvent).toBeCalled
    expect(wrapper.instance().props.allUserEvents).toBeCalled
    expect(wrapper.instance().props.getAllCenters).toBeCalled
  });
  it('should render a <EventList /> element', () => {
    const wrapper = shallow(<EventList
      {...props}
      messages={props.messages}
      deleteFlashMessage={mockdeleteFlashMessage}
      events={props.userEvents.events}
       />
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().props.messages).toEqual(['Welcome'])
  });
  it('should render a <AddEvent /> element', () => {
    const wrapper = shallow(<AddEvent
      {...props}
      title={props.title}
      addEvent={mockaddEvent}
       />
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().props.title).toEqual('Add Event')
    expect(wrapper.instance().state.event).toEqual({})
    expect(wrapper.instance().state.value).toEqual('Choose a Center')
    expect(wrapper.instance().state.allCenters).toEqual([])
    expect(wrapper.instance().state.error).toEqual({})
    
  });
  it('should render a <AddEventModalButton /> ', () => {
    const wrapper = shallow(<AddEventModalButton />
    );
    //console.log(wrapper.instance())
    expect(wrapper.instance().state).toEqual(null)
  });
  it('should render a <Pages /> ', () => {
    const wrapper = shallow(<Pages
      {...props}
      count={props.userEvents.count}
      limit={props.userEvents.limit}
       />
    );
    //console.log(wrapper.instance())
    
  });
});
