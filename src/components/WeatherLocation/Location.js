import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({data:{name}}) => {

    // se puede definir la variable asi 
    // const city = props.city;
    //  o con DesectuvuringbDestructuring
    // const {city} = props;

    return (<div className="locationCont">
        <h1>
            {name}
        </h1></div>)

};

Location.prototype = {
    // ptrs shortcut para validar string
    city: PropTypes.string.isRequired,
        
    }



export default Location;