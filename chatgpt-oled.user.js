// ==UserScript==
// @name         Unlock chatgpt oled mode
// @namespace    https://chatgpt.com/
// @version      1.0
// @description  Adds data-oled to the <html> element on chatgpt.com
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function applyOledAttribute() {
        document.documentElement.setAttribute('data-oled', '');
    }

    applyOledAttribute();

    new MutationObserver(() => {
        if (!document.documentElement.hasAttribute('data-oled')) {
            applyOledAttribute();
        }
    }).observe(document.documentElement, {
        attributes: true,
        childList: false,
        subtree: false
    });
})();
