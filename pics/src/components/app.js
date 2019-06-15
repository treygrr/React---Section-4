import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = { images: [] };
    }

    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID 14c55d32586a4adbc8a380e633ebb072339a8eb0c9daa7d076b231cc12d28f31'
                }
            });
        
        // .then((response) => {
        //     console.log(response.data.results);
        // });

        // use a promise to get data when it's returned from the api asyncy. 

        this.setState({ images: response.data.results });
    }
    

    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }

}

export default App;