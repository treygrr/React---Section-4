import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    // Not required by react
    // Constructor is called first in a class. Destructor is called last.
    constructor(props) {
        super(props);

       
        this.state = {
            lat: null,
            long: null,
            errorMessage: ''
        }; 
        

    }

    // the idea to abbreviate the syntax here is that babel will build the constructor for us.
    // I prefer to write out the constructor for better readability personally. 
    // I like robust definitions. Shortcuts don't do it for me.

    // state = {
    //     lat: null,
    //     long: null,
    //     errorMessage: ''
    // }; 

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // We use setState only to set the state. Do not use other traditional ways to try and set it.
                // This will simply not work.
                // We don't usually want async or code that takes time to execute in the render function.
                this.setState({ lat: position.coords.latitude });
                this.setState({ long: position.coords.longitude });
            },
            (err) => {
                this.setState({errorMessage: err.message});
            } 
        );
    }

    // React says that we have to define render!!
    render() {
        // Add conditional based rendering for the different ways geolocation can return data
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} long={this.state.long} />
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