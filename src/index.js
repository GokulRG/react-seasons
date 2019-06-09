import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    //State Initialization outside the constructor eliminates the need for a constructor, unless you need to 
    //have any other code within the constructor apart from super(props) and state initialization.
    state = { lat: null, long: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    render() {

        //Do not use heavy API calls or any other methods here
        //because the render method will be repeatedly called
        //throughout the lifecycle of the component.

        //Adding Conditional Rendering
        // Render only location info when available
        //Else only error if available
        if (this.state.lat && this.state.long && !this.state.errorMessage) {
            return (
                <div>
                    <span>Latitude :  {this.state.lat}</span> <br />
                    <span>Longitude : {this.state.long}</span> <br />  
                </div>
            );
        }

        if (!this.state.lat && !this.state.long && this.state.errorMessage) {
            return (
                <div>
                    <span> Error : <span style={{color:'red'}}>{this.state.errorMessage}</span></span>
                </div>
            );
        }

        return <span> Loading .....</span>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));