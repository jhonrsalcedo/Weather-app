/*jshint esversion: 6 */ 
import React from "react";
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD, 
    CLOUDY,
    SUN, 
    RAIN,
    SNOW,
    WINDY, 
} from './../../../constants/weathers';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};
const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    const sizeIcon ="4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />   
}
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTempCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.prototype={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,//valor requerido
};
export default WeatherTemperature;