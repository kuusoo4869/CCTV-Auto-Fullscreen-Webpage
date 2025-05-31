// ==UserScript==
// @name         CCTV 视频自动网页全屏脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在打开指定 CCTV 网页后自动点击视频的网页全屏按钮
// @author       by.空想|tool.tare
// @match        https://tv.cctv.com/*/*/*/VIDE*.shtml
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 重试次数和间隔时间
    const maxRetries = 5;
    const retryInterval = 1000; // 1 秒

    function tryClickFullscreenButton(retries) {
        const fullscreenButton = document.querySelector('.vjs-webfullscreen-control.vjs-control.vjs-button');

        if (fullscreenButton) {
            fullscreenButton.click();
        } else if (retries < maxRetries) {
            setTimeout(() => tryClickFullscreenButton(retries + 1), retryInterval);
        }
    }

    // 等待页面加载完成
    window.addEventListener('load', function() {
        tryClickFullscreenButton(0);
    });
})();