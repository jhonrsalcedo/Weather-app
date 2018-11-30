import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
//Validacion de constantes
import {
    SUN,
} from './../../../constants/weathers';
import './style.css'

const WeatherData = () => (
    <div className="weatherCont">
        <WeatherTemperature 
            temperature={` ${36}`}
            weatherState={SUN}
        />
        <WeatherExtraInfo
            humidity={80} wind={"10 m/s"}
         />

    </div>
    
);

export default WeatherData;