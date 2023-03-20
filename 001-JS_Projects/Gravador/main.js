const { app, BrowserWindow, Menu, ipcMain, globalShortcut } = require("electron");
const os = require("os");
const path = require('path')
const isDev = 
    process.env.NODE_ENV !== undefined && process.env.NODE_ENV === "development"
    ?true
    :false; 

const isMac = process.platform === "darwin" ? true : false;

function createWindow() {
    const win = new BrowserWindow({
        width: isDev ? 950 : 500,
        height: 300,
        resizable: isDev ? true : false,
        backgroundColor: '#234',
        show: false,
        icon: path.join(__dirname, "assets", "icons", "wooper.jpg"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile("./src/index.html");
    if (isDev) {
        win.webContents.openDevTools();
    }
    win.once("ready-to-show", ()=> {
        win.show();
        setTimeout(() => {
            win.webContents.send('cpu_name', os.cpus()[0].model)
        }, 3000);
    });
    const menuTemplate = [
        {label: app.name,
            submenu: [
                {label: "Preferences", click: () => { }},
                {label: "Open destination folder", click: () => { }}
            ]},
        {
        label: 'File',
            submenu: [
                isMac ? { role: "close" } : { role: "quit" }
            ]}
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();
})

app.on('will-quit', ()=> {
    globalShortcut.unregisterAll();
})

app.on('window-all-closed', () => {
    console.log("todas as janelas fechadas")
    if (!isMac) {
        app.quit();
    }
})

app.on('activate' , () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

ipcMain.on('open_new_window', () => {
    createWindow();
});