const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
 
let win
 
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 515,
    height: 600,
    minWidth: 515,
    minHeight: 520,
    resizable: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'build/icons/64x64.png') })
 
  win.loadURL('https://<yourclientaddress>/webclient')

  win.webContents.on('did-finish-load', () => {
    let name = require('./package.json').name;
    let version = require('./package.json').version;
    let windowtitle = name + " v." + version;
    win.setTitle(windowtitle);
  })
}

app.on('ready', createWindow)