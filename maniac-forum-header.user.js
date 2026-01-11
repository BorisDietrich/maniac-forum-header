// ==UserScript==
// @name         Maniac Forum Custom Header
// @version      1.0
// @description  Fügt eigenen One-Click-Header im Maniac Forum ein
// @match        https://remix.maniac-forum.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
        <div class="header-section" style="background-color: #cecece;">
            <a href="/realm/1/board/1">Smalltalk</a>
            <a href="/realm/1/board/2">For Sale</a>
            <a href="/realm/1/board/4">Tech'n'Cheats</a>
            <a href="/realm/1/board/6">OT</a>
            <a href="/realm/1/board/26">Filme & Serien</a>
            <a href="/realm/1/board/36">M! Relaunch</a>
        </div>
        <div class="header-section" style="background-color: #acacac;">
            <a href="/realm/3/board/47">Nachrichten</a>
            <a href="/realm/3/board/45">EU Politik</a>
            <a href="/realm/3/board/46">Weltpolitik</a>
        </div>
        <div class="header-section" style="background-color: #cecece;">
            <a href="/realm/5/board/48">VIP</a>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .header {
          position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 20px;
            z-index: 9999;
            display: flex;
            font-family: Arial, sans-serif;
        }
        .header-section {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
        }
        .header a {
            color: #000;
            margin-right: 20px;
            text-decoration: none;
            white-space: nowrap;
        }
        .header a:visited {
            color: #000;
        }
        .header a:hover {
            color: #900000;
        }
        .header a.active {
            color: #006000;
            text-decoration: none;
        }
    `;
    document.head.appendChild(style);

    document.body.prepend(header);

    const currentPath = window.location.pathname;
           document.querySelectorAll('.header a').forEach(a => {
                  if (a.getAttribute('href') === currentPath) {a.classList.add('active');
           }
});
})();
