import React from 'react';
import Gif from './Gif';
import PropTypes from 'prop-types';

const GifList = ({ gifs, onGifSelect }) => {
  return (
    <div className="gif-list">
      {
        gifs.map((image) => {
          return <Gif key={image.id} gif={image} onGifSelect={onGifSelect} />
        })
      }
    </div>
  );
};
GifList.propTypes = {
  gifs: PropTypes.array,
  onGifSelect: PropTypes.func.isRequired
}
export default GifList;