import React from 'react';
import WeatherIcons from 'react-weathericons';
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
}

// Añadimos una funcion
const getWeahterIcon = (wheatherState) => {

    const icon = Icons[wheatherState];
    // verificamos si es nulo
    if(icon)
        return <WeatherIcons name={icon} size="2x"></WeatherIcons>;

    else
    return <WeatherIcons name={"day-cloudy"} size="2x"></WeatherIcons>
    
}

const WeatherTemperature = ({ temperature, wheatherState }) => (


    <div>
        {/* el codigo javascript va siempre entre llaves */}
        {getWeahterIcon(wheatherState)}
        <span>{`${temperature} Cº`}</span></div>

);


export default WeatherTemperature;