import React from 'react';
import WeatherLocation from './WeatherLocation';



//Generamos funcion que obtiene una lista de un array//Parametro es cities


// Recibimos cities como parametro
const LocationList = ({cities, onSelectedLocation}) =>{

// Recibe como parametro city
    const handleWeatherLocation = city => {
    console.log("handleWEatherLocation");
    // Va a ser un parametro de LocationList, para mostrar los datos de esa ciudad
    onSelectedLocation(city);
    };

    const strToComponent = cities => (
        // iteramos las cites con .map y obtenemos un weatherLocati// Creamos la clave para que React recuerde que al actu
        cities.map( (city) => 
        <WeatherLocation 
        key={city}
        city = {city}
        LocationClick ={ () => handleWeatherLocation(city)}>
          

        </WeatherLocation>)
        // WeatherLocation nos dispara el evento creado en su constructor
    
    );
    
    return (

    <div>
         {/*Podemos invocer funciones javascript metiendolas entre llaves  */}
         {strToComponent(cities)}
        
    </div>
    
 )};

export default LocationList;

