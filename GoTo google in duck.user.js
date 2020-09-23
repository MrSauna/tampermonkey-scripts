// ==UserScript==
// @name         GoTo google in duck
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/MrSauna/tampermonkey-scripts/raw/master/GoTo%20google%20in%20duck.user.js
// @downloadURL  https://github.com/MrSauna/tampermonkey-scripts/raw/master/GoTo%20google%20in%20duck.user.js
// @match        https://duckduckgo.com/*q=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var input_field_element = document.getElementById("search_form_input")
    var search_string = input_field_element.value

    var search_url = "https://www.google.com/search?q=" + search_string

    var parent_element = document.getElementById("search_form")
    var parent_element_width = parent_element.clientWidth


    var new_element_font_size = Math.floor(input_field_element.clientHeight * 0.75)
    var new_element_string = '<div style="position:absolute; font-size: '+new_element_font_size+'px;'
    +'text-align:center;height:'+input_field_element.clientHeight+'px;'
    +'left:'+parent_element_width+'px;padding-left:7px;top:0;line-height:normal;">'
    +'<a style="vertical-align: middle;" href="'+search_url+'" >G</a></div>'

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }

    var new_element = createElementFromHTML(new_element_string)

    parent_element.appendChild(new_element)



})();
