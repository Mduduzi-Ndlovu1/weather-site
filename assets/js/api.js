/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Mduduzi Ndlovu 2023 All rights reserved
 * @author Mduduzi Ndlovu <mduduzindlovu02@gmail.com>
 */

'use strict';

const api_key ="e3f555fcd191850b791166f696a85673";

export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data))
}

export const url = {
    currentWeather(lat,lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airpollution(lat,lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat,lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * 
     * 
     * @param {string} query Search query e.g : "LOndon"
     * @returns
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}