// @ts-ignore 
let electron = require('electron');
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
// @ts-ignore 
let path = require('path');
function createWindow () {   
  // Create the browser window.     
let win = new BrowserWindow({width: 800, height: 600});
// and load the index.html of the app.     
win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
}      
app.on('ready', createWindow);