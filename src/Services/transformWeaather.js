

import {
    CLOUDY, 
    SUN,
    RAIN,
    SNOW, 
    THUNDER, 
    DRIZZLE,
    
} from './../constants/weathers';



const getWeatherState = weather => {
    const { id } = weather[0];

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUDY;
    } 
}

const transformWeaather = weather_data => {

    const { humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather);
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