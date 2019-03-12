import { shallow } from 'enzyme';
import Gif from '../../components/Gif';
import React from 'react';

test('should render Gif correctly', () => {
    const gif = { title: "test", images: { downsized_still: { url: "test.url.com" } } }
    const wrapper = shallow(<Gif gif={gif} onGifSelect={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});