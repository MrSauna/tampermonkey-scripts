// ==UserScript==
// @name         choose aalto login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/MrSauna/tampermonkey-scripts/raw/master/autoChooseAaltoLogin.user.js
// @downloadURL  https://github.com/MrSauna/tampermonkey-scripts/raw/master/autoChooseAaltoLogin.user.js
// @match        https://mycourses.aalto.fi/login/index.php
// @icon         https://www.google.com/s2/favicons?domain=aalto.fi
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = "https://mycourses.aalto.fi/auth/shibboleth/index.php";
})();
