import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import axios from 'axios';
import './styles/app.css';

class App extends React.Component {
    state = {
        gifs: [],
        selectedGif: null,
        modalIsOpen: false
    }
    handleTermChange = (term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=ST5AZBXisn7lRdJ9YCPwll3eMWw86YCQ`;
        const self = this;
        axios.get(url).then(function (response) {
            // handle success
            self.setState({ gifs: response.data.data })
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    openModal = (gif) => {
        this.setState({
            modalIsOpen: true,
            selectedGif: this.state.gifs.findIndex(g => g.id === gif.id)
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }

    render() {
        const { gifs, modalIsOpen, selectedGif } = this.state;
        return (
            <div>
                <Search onTermChange={this.handleTermChange} />
                <GifList gifs={gifs}
                    onGifSelect={selectedGif => this.openModal(selectedGif)} />
                <GifModal modalIsOpen={modalIsOpen}
                    selectedGif={selectedGif}
                    onRequestClose={() => this.closeModal()}
                    gifs={gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
