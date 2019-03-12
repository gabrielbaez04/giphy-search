import { shallow } from 'enzyme';
import Slider from '../../components/Slider';
import React from 'react';

let gifs, selectedGif;
beforeEach(() => {
    gifs = [
        { id: 1, title: "test", images: { downsized_still: { url: "test.url.com" }, downsized: { url: "test" } } },
        { id: 2, title: "test", images: { downsized_still: { url: "test.url.com" }, downsized: { url: "test" } } },
        { id: 3, title: "test", images: { downsized_still: { url: "test.url.com" }, downsized: { url: "test" } } },
    ];
    selectedGif = 0;
});

test('should render Search correctly', () => {
    const wrapper = shallow(<Slider gifs={gifs} selectedGif={selectedGif} />);
    expect(wrapper).toMatchSnapshot();
});
