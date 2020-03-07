

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';


const getWeatherState = weather_data =>{
    return SUN;
}

const transformWeaather = weather_data => {

    const { humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = SUN;
    const { name} = weather_data;

    const data = {
        humidity,
        temperature:temp,
        weatherState,
        wind: `${speed} m/s`,
        name,
    }

    return data;
    
}

export default transformWeaather;