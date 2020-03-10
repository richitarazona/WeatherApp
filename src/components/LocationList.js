import React from 'react';
import WeatherLocation from './WeatherLocation';



//Generamos funcion que obtiene una lista de un array//Parametro es cities


// Recibimos cities como parametro
const LocationList = ({cities, onSelectedLocation}) =>{

// Recibe como parametro city
    const handleWeatherLocationClick = city => {
    console.log("handleWEatherLocation");
    // Va a ser un parametro de LocationList, para mostrar los datos de esa ciudad
    onSelectedLocation(city);
    };
    

    const strToComponents = cities => (
        cities.map( (city, index) => 
            <WeatherLocation key={city} city={ city }
                onWeatherLocationClick={()=> handleWeatherLocationClick(city)}>
            </WeatherLocation>)
    );
 
    return (
        <div>
            {strToComponents(cities)}
        </div>
    );
};
    

export default LocationList;

