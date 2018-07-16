import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubmitButton from '../../components/SubmitButton';

configure({ adapter: new Adapter() });

describe('<SubmitButton />', () => {
  const props = {
    name: 'Delete',
    id: 'modify'
  }
  
  it('should render a <SubmitButton /> element', () => {
    const wrapper = shallow(<SubmitButton
      {...props}
    />
    );
    expect(wrapper.instance().state).toEqual(null)
    expect(wrapper.instance().props.name).toEqual('Delete')
    expect(wrapper.instance().props.id).toEqual('modify')
  });
});
