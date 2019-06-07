import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        //This is the only time when you will directly manipulate the 
        //state object without calling setState.
        this.state = { lat : null , long : null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude, long : position.coords.longitude});
            },
            (error) => {
                //Graceful error handling.
                console.log(error);
                this.setState({errorMessage: error.message});
            }
        );
    }

    render() {
        
        //Do not use heavy API calls or any other methods here
        //because the render method will be repeatedly called
        //throughout the lifecycle of the component.

        return (
            <div>
                <span>Latitude :  {this.state.lat}</span> <br/>
                <span>Longitude : {this.state.long}</span> <br/>
                <span>Error : {this.state.errorMessage}</span>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));