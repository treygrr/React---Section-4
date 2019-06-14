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
            long: null,
            errorMessage: ''
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
                this.setState({errorMessage: err.message});
            } 
        );
    }

    componentDidMount () {
        console.log('Rendered');
    }

    componentDidUpdate () {
        console.log('Rerendered');
    }

    // React says that we have to define render!!
    render() {
        // Add conditional based rendering for the different ways geolocation can return data
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <div>Latitude: {this.state.lat}</div>
                    <div>Long: {this.state.long}</div>
                </div>
            );
        }
        // Add a default return if none of the conditionals are met above.
        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);