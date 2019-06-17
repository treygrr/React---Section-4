import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <label>Video Search</label>
                    <input type="text" className=""></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;