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

export const monthName = [
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
export const getDate = function(dataUnix, timezone) {
    const date = new Date((dateUnix + timezone)* 1000);
    const weekDayName  = weekDayName[date.getUTCDay()];
    const monthName = monthName[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}}`
}