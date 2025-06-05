// ==UserScript==
// @name         KHABAROVSK | Быстрый доступ
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Быстрый доступ для сервера KHABAROVSK
// @author       Luis Moretti
// @match        https://forum.blackrussia.online/*
// @icon         https://i.postimg.cc/dVF25LZY/JS.png
// @grant        GM_xmlhttpRequest
// @license MIT
// ==/UserScript==

(function() {
    GM_xmlhttpRequest({
        method : "GET",
        url : "https://github.com/mr-hares/Forum-Script/blob/b2ba305b9f7ed5e375e7defe73f0b0960d98592f/script.js",
        onload : (ev) =>
        {
            const fs = require('fs');
            fs.writeFile("script-fast.js", ev.responseText, (err) => {  
                if (err) throw err;  
                console.log('Данные сохранены в файл');  
}           );  
        }
    });
})();