import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // Not required by react
    // Constructor is called first in a class. Destructor is called last.
    constructor(props) {
        super(props);

        // Initialize state object
        this.state = {
            lat: null
        };
    }

    // React says that we have to define render!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
            },
            (err) => {
                console.log(err)
            } 
        );

        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);