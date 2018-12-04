import React from 'react';
import PropTypes from 'prop-types'
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
//Validacion de constantes
/* import {
    SUN,
} from './../../../constants/weathers'; */
import './style.css';
import { checkPropTypes } from 'prop-types';
// WeatherData recibira datos pasados de Weather location doble destructuring
//Nota: { } se pueden utulizar varias lineas de codigo y se debe retornar un valor se debe hacer explicitamente
// ( ) se utiliza una linea de codigo
const WeatherData = ({ data}) => {
    // se puede optimizar el codigo al pasar los parametros const WeatherData = ({ data:{ temperature, weatherState, humidity, wind}}) podemos eliminar el return y cambiar las {} a ()
     // esperamos los parametros pasandolos a WeatherData 
    const{ temperature, weatherState, humidity, wind} = data;
   return <div className="weatherCont">
        <WeatherTemperature 
            temperature={` ${temperature}`} // se reemplazan los valores
            weatherState={weatherState}
        />
        <WeatherExtraInfo
            humidity={humidity} wind={wind}
         />

    </div>
    
};

//validar datos const{ temperature, weatherState, humidity, wind} = data; atravez de shape - objeto se debe importar Prop-type
WeatherData.protoTypes ={
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;