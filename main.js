const {app, BrowserWindow, Menu} = require('electron')
require('electron-reload')(__dirname);

function createWindow(){
    let window = new BrowserWindow({})
    window.loadFile('index.html')

    // Creating menu
    // const menu = Menu.buildFromTemplate(mainMenuTemplate)
    // Menu.setApplicationMenu(menu)
}

app.whenReady().then(createWindow)


// create menu template
const mainMenuTemplate = [
    {
        label: 'Student',
        submenu: [
            {
                label: 'New'
            },
            {
                label: 'Edit'
            },
            {
                label: 'Quit',
                click(){
                    // do something when clicked
                    app.quit();
                }
            }

            
        ]
    }
]