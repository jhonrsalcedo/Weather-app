import React from 'react';
import Location from  './Location';
import WeatherData from './WeatherData';
import './styles.css'
const WeatherLocation = () =>(
    /* se le asigna un parametro a la etiqueta Location*/
    <div className="weatherLocationCont">
        <Location city={"Cartagena"}></Location>
        <WeatherData></WeatherData>
    </div>
);
//cambio 
export default WeatherLocation;