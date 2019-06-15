import React from 'react';

class SearchBar extends React.Component  {
    constructor (props) {
        super(props);
        this.state = { term: '' }
    }

    onInputChange (event) {
        let text = event.target.value;
        console.log(text);
    }

    onInputClick (event) {
        // console.log('input was clicked');
    }

    onFormSubmit (event) {
        event.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                               value={this.state.term}
                               onChange={(e) => this.setState({ term: e.target.value })}
                               // onClick={this.onInputClick}
                               >
                        </input> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;