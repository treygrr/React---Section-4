import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 14c55d32586a4adbc8a380e633ebb072339a8eb0c9daa7d076b231cc12d28f31'
            }
        });
    }
    

    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }

}

export default App;