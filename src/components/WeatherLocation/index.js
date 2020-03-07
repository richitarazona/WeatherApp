import React, { Component } from 'react';
 import getUrlByCity from './../../Services/getUrlByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeaather from './../../Services/transformWeaather';


import {
    
    SUN,
   
} from './../../constants/weathers';


const data = {
    
    location:"",
    temperature: "",
    weatherState: "",
    humidity: "30",
    wind: '10 m/s'
};

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        // dedi¡¡finimos que una propiedas de props es city
        const { city } = props;
        this.state = {
            city,
            data: data,
        };
        console.log("constructor");
    }

    // shortcut cdm
    // Se ejecuta cuando el componente esta cargado(Mount)
    //Cargamo los datos cuando se ha cargado el componente
    componentDidMount(){
        console.log("componentDidMount")
        this.handleUpdateClick();
    }
    // shortcut cdup
// Se ejecuta cuando el componente se ha actualizado(Update)
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    

    

    handleUpdateClick = () => {

        const api_weather = getUrlByCity(this.state.city);

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data);
            // Asignamos a newWeather los valores de la data
            const newWeather = transformWeaather(data);
           
            console.log(newWeather);
            this.setState({ data: newWeather });

        });
    }

    render() {
        // pasamod la funcion como propiedad del objeto props
        const {OnWeatherLocationClick} = this.props;
        console.log("render");
        const {  data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={OnWeatherLocationClick}>
                {/* Escuchamos cuando hacemos un evento sobre el div */}
                <Location data={data}></Location>
                {/* Es una condicion..si tiene datos data? y  si no los tiene : */}
                {data ?
                
                <WeatherData data={data}></WeatherData> :
                "Cargando....."
                }
            </div>
        );
    }

}

export default WeatherLocation;


