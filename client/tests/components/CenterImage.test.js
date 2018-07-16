import React from 'react';
import { configure, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import CenterImage from '../../components/CenterImage';

configure({ adapter: new Adapter() });
const mockaddImage = jest.fn();
const wrapper = shallow(<CenterImage addImage={mockaddImage} />)

const e = {
  target: {
    files: []
  }
}
describe('<CenterImage />', () => {
  it('should call the uploadImage function', () => {
    const spy = sinon.spy(wrapper.instance(), 'uploadImage')
    wrapper.instance().uploadImage(e)
    expect(mockaddImage).toHaveBeenCalledTimes(1)
  })
});
