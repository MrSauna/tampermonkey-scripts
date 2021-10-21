// ==UserScript==
// @name         GoTo duck in google
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/MrSauna/tampermonkey-scripts/raw/master/GoTo%20duck%20in%20google.user.js
// @downloadURL  https://github.com/MrSauna/tampermonkey-scripts/raw/master/GoTo%20duck%20in%20google.user.js
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var input_field_element = document.getElementsByClassName("gLFyf gsfi")[0]
    var search_string = input_field_element.value

    var duck_url = "https://duckduckgo.com/?q=" + search_string


    var new_element_font_size = input_field_element.clientHeight
    var new_element_string = '<div style="font-size: '+new_element_font_size+'px;margin: auto;padding-right: 7px;"><a href="'+duck_url+'" >D</a></div>'

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
    var new_element = createElementFromHTML(new_element_string)

    var parent_element = document.getElementsByClassName("RNNXgb")[0]
    parent_element.appendChild(new_element)

})();
