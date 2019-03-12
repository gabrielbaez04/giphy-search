import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        value.length > 2 && this.props.onTermChange(value);
    }

    render() {
        return (
            <div className="search">
                <input name="term" placeholder="Enter text to search for gifs!" onChange={this.onInputChange} />
            </div>
        );
    }
}

Search.propTypes = {
    onTermChange: PropTypes.func.isRequired
}

export default Search;