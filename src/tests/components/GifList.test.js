import { shallow } from 'enzyme';
import GifList from '../../components/GifList';
import React from 'react';

let gifs;
beforeEach(() => {
    gifs = [
        { id: 1, title: "test", images: { downsized_still: { url: "test.url.com" } } },
        { id: 2, title: "test", images: { downsized_still: { url: "test.url.com" } } },
        { id: 3, title: "test", images: { downsized_still: { url: "test.url.com" } } },
    ]
});
test('should render GifList correctly', () => {
    const wrapper = shallow(<GifList gifs={gifs} onGifSelect={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the amount of Gifs in the GifList', () => {
    const wrapper = shallow(<GifList gifs={gifs} onGifSelect={() => { }} />);
    expect(wrapper.find('Gif').length).toBe(gifs.length);
});

