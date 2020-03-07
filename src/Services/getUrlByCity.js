import React from 'react';

import { url_base_weather, api_key } from "../constants/api_url";

// Esta funcion recibe por parametro CIiy
const getUrlByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;
};

export default getUrlByCity;