import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ goToNextSlide }) => {
    return (
        <div className="nextArrow arrow" onClick={goToNextSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

RightArrow.propTypes = {
    goToNextSlide: PropTypes.func.isRequired
}

export default RightArrow;