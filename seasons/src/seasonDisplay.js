import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    Summer: {
        text: `Let's hit the beach!`,
        iconName: 'sun'
    },
    Winter: {
        text: `Burr! It's cold!`,
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat < 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`SeasonDisplay ${season}`}>        
            <div>Latitude: {props.lat}</div>
            <div>Longitude: {props.long}</div>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1>{ text }</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>
    );
}

export default SeasonDisplay;