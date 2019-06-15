import React from 'react';

class SearchBar extends React.Component  {
    onInputChange(event) {
        let text = event.target.value;
        console.log(text);
    }

    onInputClick(event) {
        // console.log('input was clicked');
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                               onChange={this.onInputChange}
                               // onClick={this.onInputClick}
                               ></input> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;