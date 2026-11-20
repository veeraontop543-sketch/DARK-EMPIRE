const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        title: "DARK EMPIRE | Bot Dashboard",
        autoHideMenuBar: true,
        backgroundColor: '#0a0b10',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // UPDATED to your new working Render link
    mainWindow.loadURL('https://dark-empire-yb3w.onrender.com');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
