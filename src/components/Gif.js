import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({ gif, onGifSelect }) => {
  return (
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized_still.url} />
      <div className="gif-title">{gif.title.replace("GIF", "")}</div>
    </div>
  )
};
Gif.propTypes = {
  gif: PropTypes.object.isRequired,
  onGifSelect: PropTypes.func.isRequired
}
export default Gif;