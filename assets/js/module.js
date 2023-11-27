/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright Mduduzi Ndlovu 2023 All rights reserved
 * @author Mduduzi Ndlovu <mduduzindlovu02@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
/**
     * 
     * 
     * @param {number} dateUnix Unix date in seconds
     * @param {number} timezone Timezone Shift from UTC in seconds
     * @returns {string} Date String. Fomate: "Sunday 10, Jan"
     */
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone)* 1000);
    const weekDayName  = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}}`;
}
/**
     * 
     * 
     * @param {number} timeUnix Unix date in seconds
     * @param {number} timeUnix Timezone shift from UTC in seconds
     * @returns {string} Time String. formate: "HH:MM AM/PM"
     */
export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const mintues = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${mintues} ${period}`;

}

/**
     * 
     * 
     * @param {number} timeUnix Unix date in seconds
     * @param {number} timeUnix Timezone shift from UTC in seconds
     * @returns {string} Time String. formate: "HH AM/PM"
     */

export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours()
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;

}
/**
     * 
     * 
     * @param {number} mps Metter per seconds
     * @param {number} Kilometer per hour 
     * @returns {string} Time String. formate: "HH AM/PM"
     */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    2: {
        level: "Fair",
        message: "Air quality is considered acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusally sensitive to air pollution"
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected"
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected"
    },
}

