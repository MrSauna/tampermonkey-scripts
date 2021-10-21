// ==UserScript==
// @name         check login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mycourses.aalto.fi/*
// @exclude      https://mycourses.aalto.fi/login/index.php
// @icon         https://www.google.com/s2/favicons?domain=aalto.fi
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var status = document.getElementsByClassName("usermenu")[0].children[0].className;
    var loggedIn = status == "login" ? false : true;

    if(!loggedIn) window.location.href = "https://mycourses.aalto.fi/login/index.php";
})();
