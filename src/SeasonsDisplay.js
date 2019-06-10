import React from 'react';

const getSeason = (lat, month) => {

    //Month uses a 0 index
    if (month > 2 && month < 9) {
        return (lat > 0) ? 'summer' : 'winter'; 
    } else {
        return (lat > 0) ? 'winter' : 'summer';
    }

}

const config = {
    summer : {
        iconName : 'sun icon',
        size : 'massive',
        color : 'yellow',
        displayMessage : 'Let\'s hit the beach!'
    },
    winter : {
        iconName : 'snowflake icon',
        size : 'massive',
        color : 'teal',
        displayMessage : 'Brrrrr.. It\'s cold out here!'
    }
};

const SeasonsDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());

    //If we see repeated ternary operators like this and unnecessary clutter inside the method, it can
    //be moved to a config object
    /*const displayMessage = (season === 'winter') ? "" : ""
    const iconString = (season === 'winter') ? "blue snowflake icon" : "yellow sun icon"; */
    const {iconName, size, color, displayMessage} = config[season];

    return (
        <div>
            <i className={`${iconName} ${size} ${color}`} /> <br/>
            {displayMessage} <br/>
            <i className={`${iconName} ${size} ${color}`} />
        </div>
    );
};

export default SeasonsDisplay;