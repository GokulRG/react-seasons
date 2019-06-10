import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    //State Initialization outside the constructor eliminates the need for a constructor, unless you need to 
    //have any other code within the constructor apart from super(props) and state initialization.
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            error => this.setState({ errorMessage: error.message })
        );
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return (
                <div>
                    <SeasonsDisplay lat={this.state.lat}/>
                </div>
            );
        }

        if (!this.state.lat && this.state.errorMessage) {
            return (
                <div>
                    <span> Error : <span style={{color:'red'}}>{this.state.errorMessage}</span></span>
                </div>
            );
        }

        return <Spinner message='Please Allow Access To Location'/>
    }

    render() {

        //Do not use heavy API calls or any other methods here
        //because the render method will be repeatedly called
        //throughout the lifecycle of the component.

        //Adding Conditional Rendering
        // Render only location info when available
        //Else only error if available

        //In reality, it's not good to have so many conditionals like this in the 
        //render function. If this is the case, it's better to put all this conditional 
        // logic inside another function so that we can call it within the render function.
        //this is especially useful, when you need to do some global change that affects all conditionals
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));