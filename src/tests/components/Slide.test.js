import { shallow } from 'enzyme';
import Slide from '../../components/Slide';
import React from 'react';

test('should render Slide correctly', () => {
    const wrapper = shallow(<Slide image="test" />);
    expect(wrapper).toMatchSnapshot();
});
