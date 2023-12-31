/**
 * @license MIT
 * @fileoverview Manage all routes
 * @copyright Mduduzi Ndlovu 2023 All rights reserved
 * @author Mduduzi Ndlovu <mduduzindlovu02@gmail.com>
 */

'use strict';

import { updateWeather, error404 } from "./app.js";

// Default location set to London, you can modify this based on your preferences
const defaultLocation = "#/weather?lat=51.509865&lon=-0.118092";

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(
        res => {
            const { latitude, longitude } = res.coords;
            updateWeather(`lat=${latitude}`, `lon=${longitude}`);
        },
        err => {
            window.location.hash = defaultLocation;
        }
    );
};

/**
 * @param {string} query Search Query
 */
const searchedLocation = query => updateWeather(...query.split("&"));

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation],
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);
    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];

    const routeHandler = routes.get(route);
    if (routeHandler) {
        routeHandler(query);
    } else {
        error404();
    }
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if (!window.location.hash) {
        window.location.hash = defaultLocation;
    } else {
        checkHash();
    }
});
