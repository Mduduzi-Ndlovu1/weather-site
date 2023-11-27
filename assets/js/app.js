/**
 * @license MIT
 * @copyright Mduduzi Ndlovu 2023 All rights reserved
 * @author Mduduzi Ndlovu <mduduzindlovu02@gmail.com>
 */

'use strict';

import { fetchData, url } from "./api.js";
import * as module from "./module.js"
/**   
 * add event listners on multiple elements
 * @param {NodeList} elements Elements node array
 * @param {string} eventType Event type e.g: "click", "mouseover"
 * @param {Function} callback callbacj function
*/
const addEventOnElements = function(elements, eventType, callback) {
    for (const element of elements) element.addEventListener(eventType, callback);
}


/** 
 * Toggle search in mobile devices
 */

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers, "click", toggleSearch);