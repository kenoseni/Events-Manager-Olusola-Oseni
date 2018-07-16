import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SearchPage} from '../../components/SearchPage';
import {AdminCenter} from '../../components/AdminCenter';


configure({ adapter: new Adapter() });
let props = {
  history: {},
  eventCenters: {
    searchedCenters: [
    ],
    count: 4
  }
}
const wrapper = shallow(<SearchPage
  {...props}
/>)
describe('<SearchPage />', () => {
  it('should render a <SearchPage /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('it should render AdminCenter is searchedCenter is greater than 1', () => {
    wrapper.setProps({
      ...wrapper.props,
      eventCenters: {
        searchedCenters: [
          {  
            id: 4,
            name : 'cincinati',
            description: 'you should knw',
            location: 'Lagos', 
            price: '100000',
            capacity: 1000,
            image: ''
        }
      ]
    }
      
    })
    expect(wrapper.find('AdminCenter').exists()).toBeTruthy()
  });
})
