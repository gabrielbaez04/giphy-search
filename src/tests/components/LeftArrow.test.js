import { shallow } from 'enzyme';
import LeftArrow from '../../components/LeftArrow';
import React from 'react';

test('should render LeftArrow correctly', () => {
    const wrapper = shallow(<LeftArrow goToPrevSlide={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
});
