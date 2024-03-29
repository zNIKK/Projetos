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
        width: 600,
        height: 600,
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
        {role: 'appMenu'},
        {role: 'fileMenu' },
        {
        label: 'window',
            submenu: [
                {
                    label: 'New window',
                    click: () => {
                        createWindow();
                    }
                },
                {
                    type: 'separator',
                },
                {
                    label: 'Close all windows',
                    accelerator: 'CmdOrCtrl+e',
                    click: ()=> {
                        BrowserWindow.getAllWindows().forEach(window => { window.close() });
                    }
                }
            ]}
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();
    globalShortcut.register('CmdOrCtrl+d', () => {
        console.log("Atalho global exectado")
        BrowserWindow.getAllWindows()[0].setAlwaysOnTop(true)
        BrowserWindow.getAllWindows()[0].setAlwaysOnTop(false)
    })
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