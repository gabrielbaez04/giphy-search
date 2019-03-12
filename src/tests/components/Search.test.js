import { shallow } from 'enzyme';
import Search from '../../components/Search';
import React from 'react';

test('should render Search correctly', () => {
    const wrapper = shallow(<Search onTermChange={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
});

test('should set term on input change', () => {
    const value = 'New term';
    const wrapper = shallow(<Search onTermChange={jest.fn()} />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value, name: 'term' },

    });
    expect(wrapper.state('term')).toBe(value);
})
