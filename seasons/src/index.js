import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // Not required by react
    // Constructor is called first in a class. Destructor is called last.
    constructor(props) {
        super(props);

        // Initialize state object
        this.state = {
            lat: null,
            long: null
        };
        // We don't usually want async or code that takes time to execute in the render function.
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // We use setState only to set the state. Do not use other traditional ways to try and set it.
                // This will simply not work.
                this.setState({ lat: position.coords.latitude });
                this.setState({ long: position.coords.longitude });
            },
            (err) => {
                console.log(err)
            } 
        );
    }


    // React says that we have to define render!!
    render() {
        return (
            <div className="InfoWrapper">
                <div>Latitude: {this.state.lat}</div>
                <div>Long: {this.state.long}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);