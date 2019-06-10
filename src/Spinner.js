import React from 'react';

const Spinner = (props) => {

    return (
        < div className="ui active inverted dimmer" >
            <div class="ui text loader">{props.message}</div>
        </div >
    );

};

//Specify default props for the component
//so that if the message prop isn't present
//the default prop automatically kicks in.
Spinner.defaultProps = {
    message : 'Loading'
};


export default Spinner;