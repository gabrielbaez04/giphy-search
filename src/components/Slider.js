import React from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Slide from './Slide';
import PropTypes from 'prop-types';

class Slider extends React.Component {
  state = {
    currentIndex: this.props.selectedGif || 0,
    translateValue: this.props.selectedGif > 0 ? -500 * this.props.selectedGif : 0
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.props.gifs.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            this.props.gifs.map((gif, i) => (
              <Slide key={i} image={gif.images.downsized.url} />
            ))
          }
        </div>

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

Slider.propTypes = {
  gifs: PropTypes.array.isRequired,
  selectedGif: PropTypes.number,
}

export default Slider;
