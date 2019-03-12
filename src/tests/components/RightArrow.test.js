import { shallow } from 'enzyme';
import RightArrow from '../../components/RightArrow';
import React from 'react';

test('should render RightArrow correctly', () => {
    const wrapper = shallow(<RightArrow goToNextSlide={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
});
