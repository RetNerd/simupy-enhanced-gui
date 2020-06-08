"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
function createWindow() {
    // Create the browser window.     
    var win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    // and load the index.html of the app.     
    win.loadURL('http://localhost:3000/');
}
electron_1.app.on('ready', createWindow);
