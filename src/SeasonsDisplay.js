import React from 'react';

const getSeason = (lat, month) => {

    //Month uses a 0 index
    if (month > 2 && month < 9) {
        return (lat > 0) ? 'summer' : 'winter'; 
    } else {
        return (lat > 0) ? 'winter' : 'summer';
    }

}

const SeasonsDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);

    return (
        <div>
            {season}
        </div>
    );
};

export default SeasonsDisplay;