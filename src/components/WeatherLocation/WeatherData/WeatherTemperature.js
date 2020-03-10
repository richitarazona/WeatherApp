import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import { 
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';

const Icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [WINDY]: "day-fog",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
};



// Añadimos una funcion
const getWeahterIcon = (weatherState) => {

    const icon = Icons[weatherState];
    // verificamos si es nulo

    const sizeIcons = "4x";
    if(icon)
        return  <WeatherIcons className="wicon" name={weatherState} size={sizeIcons}></WeatherIcons>;

    else
    return <WeatherIcons className="wicon" name={"rain"} size={sizeIcons}></WeatherIcons>
    
}
const WeatherTemperature = ({ temperature, weatherState }) => (


    <div className="weatherTemperatureCont">
        {/* el codigo javascript va siempre entre llaves */}
        {getWeahterIcon(weatherState)}
          <span className="tempetarure">{`${temperature}`}</span> 
        <span className="tempetarureType">{`Cº`}</span>
        </div>

);


export default WeatherTemperature;