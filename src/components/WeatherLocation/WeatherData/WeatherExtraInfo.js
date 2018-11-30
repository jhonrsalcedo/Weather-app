import React from 'react';


const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherDataCont">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} Wind`}</span>
    </div>
);


export default WeatherExtraInfo;