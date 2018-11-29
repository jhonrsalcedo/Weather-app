import React from 'react';
import Location from  './Location';
import WeatherData from './WeatherData';
const WeatherLocation = () =>(
    /* se le asigna un parametro a la etiqueta Location*/
    <div>
        <Location city={"Cartagena de Indias - Colombia"}></Location>
        <WeatherData></WeatherData>
    </div>
);
//cambio 
export default WeatherLocation;