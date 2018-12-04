import React, { Component } from 'react';
import Location from  './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    RAIN,
}from '../../constants/weathers';

//datos que seran pasados a WeatherData
const data ={
    temperature: 5,
    weatherState: SUN,
    humidity:10,
    wind: '10 m/s',
}

const data2 ={
    temperature:15,
    weatherState: RAIN,
    humidity:20,
    wind: '15 m/s',
}
class WeatherLocation extends Component {
    constructor(){
        super();
        this.state={
            city: "Cartagena",
            data: data,
        };
    }


//crear funcion flecha click, para acceder a metodos o funciones se utiliza this. 
    handleUpdatedClick = () =>{
        console.log("Actualizado")
        this.setState({
            city: "Barranquilla",
            data: data2,
        });
    }

    render() { 
        //Destructuring datos simplificar
        const {city, data} = this.state;
        return(
             /* se le asigna un parametro a la etiqueta Location*/
 <div className="weatherLocationCont">
 <Location city={city}></Location>
 
 <WeatherData data={data}></WeatherData>
 <button onClick={this.handleUpdatedClick}>Actualizar</button>
</div> // creamos el parametro data y lo igualamos a la const data para obtener los valores
        );


    }

}

//cambio 
export default WeatherLocation;