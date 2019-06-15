import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = { images: [] };
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash
            .get('/search/photos', {
                params: {
                    query: term
                },

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