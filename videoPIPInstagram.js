// ==UserScript==
// @name         pip insta video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Bibek
// @match        https://www.instagram.com/call/*
// @icon         https://static.cdninstagram.com/rsrc.php/v3/yQ/r/SOrOnJCceiE.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a button
    const button = document.createElement('button');
    button.innerHTML = 'PIP';
    button.style.cssText = 'position: absolute; right: 40%; bottom: 1.5%; transform: translateY(-50%); background: gray; border-radius: 50%; padding: 8px; cursor: pointer; margin-right: 0;';
    document.body.appendChild(button);

    // Add event listener to the button
    button.addEventListener('click', function() {
        updateVideoAttributes();
    });

    // Function to update video attributes
    function updateVideoAttributes() {
        const videos = document.querySelectorAll('video');

        videos.forEach(video => {
            video.removeAttribute('disablepictureinpicture');
            video.setAttribute('disablepictureinpicturee', '');
        });
    }


})();
