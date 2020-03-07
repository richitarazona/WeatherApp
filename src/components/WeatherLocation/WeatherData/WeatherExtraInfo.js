import React from 'react';

import ProtoTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (

    <div className="weatherExtraInfoCont">
        <span className="extraInfoText" >{`humidity: ${humidity} % -`}</span>
        <span className="extraInfoText" >{`Viento: ${wind} ` }</span>
    </div>

);


// WeatherExtraInfo.prototype = {
//     humidity: ProtoTypes.string.isRequired,
//     wind : ProtoTypes.number.isRequired,
// }

// WeatherExtraInfo.prototype = {
//     // ptrs shortcut para validar string
//     // ptnr shortcut para validar number
   
//     humedad: PropTypes.string.isRequired,
//     wind: PropTypes.number.isRequired,
        
//     }

    
export default WeatherExtraInfo;