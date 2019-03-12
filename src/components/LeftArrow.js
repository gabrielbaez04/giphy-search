import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ goToPrevSlide }) => {
    return (
        <div className="backArrow arrow" onClick={goToPrevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}

LeftArrow.propTypes = {
    goToPrevSlide: PropTypes.func.isRequired
}

export default LeftArrow;