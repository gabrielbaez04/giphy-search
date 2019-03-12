import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}

Slide.propTypes = {
    image: PropTypes.string.isRequired
}

export default Slide;