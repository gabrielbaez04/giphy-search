import { shallow } from 'enzyme';
import GifModal from '../../components/GifModal';
import React from 'react';

let gifs, selectedGif, modalIsOpen, onRequestClose;

beforeEach(() => {
    gifs = [
        { id: 1, title: "test", images: { downsized_still: { url: "test.url.com" } } },
        { id: 2, title: "test", images: { downsized_still: { url: "test.url.com" } } },
        { id: 3, title: "test", images: { downsized_still: { url: "test.url.com" } } },
    ];
    selectedGif = 0;
    modalIsOpen = false;
    onRequestClose = jest.fn();
});
test('should render GifModal correctly', () => {
    const wrapper = shallow(<GifModal gifs={gifs} selectedGif={selectedGif} modalIsOpen={modalIsOpen} onRequestClose={onRequestClose} />);
    expect(wrapper).toMatchSnapshot();
});
