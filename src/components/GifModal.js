import React from 'react';
import Modal from 'react-modal';
import Slider from './Slider';
import PropTypes from 'prop-types';

class GifModal extends React.Component {
    componentWillMount() {
        Modal.setAppElement('body');
    }
    render() {
        const { gifs, selectedGif, modalIsOpen, onRequestClose } = this.props;
        return (
            selectedGif >= 0 &&
            <Modal className="gif-modal"
                isOpen={modalIsOpen}
                onRequestClose={() => onRequestClose()}>
                <Slider gifs={gifs} selectedGif={selectedGif} />
            </Modal>
        );
    }

};

GifModal.propTypes = {
    gifs: PropTypes.array.isRequired,
    selectedGif: PropTypes.number,
    modalIsOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
}


export default GifModal;