import React from 'react';
import Location from  './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
}from '../../constants/weathers';

//datos que seran pasados a WeatherData
const data ={
    temperature: 5,
    weatherState: SUN,
    humidity:10,
    wind: '10 m/s',
}
const WeatherLocation = () =>(
    /* se le asigna un parametro a la etiqueta Location*/
    <div className="weatherLocationCont">
        <Location city={"Cartagena"}></Location>
        
        <WeatherData data={data}></WeatherData>
    </div> // creamos el parametro data y lo igualamos a la const data para obtener los valores
);
//cambio 
export default WeatherLocation;