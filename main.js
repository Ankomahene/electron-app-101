const { app, BrowserWindow, Menu } = require('electron');
require('electron-reload')(__dirname);

function createWindow() {
	let window = new BrowserWindow({});
	window.loadFile('index.html');

	// Creating menu
	// const menu = Menu.buildFromTemplate(mainMenuTemplate)
	// Menu.setApplicationMenu(menu)

	// close all windows
	// window.on('closed', function() {
	// 	app.quit();
	// });
}

app.whenReady().then(createWindow);

// create new Window
// function createNewWindow() {
// 	let window = new BrowserWindow({
// 		width: 300,
// 		height: 100,
// 		title: 'add new student'
// 	});
// 	window.loadFile('file_here');

// Garbage Collection handle
// window.on('close', function() {
// 	window = null;
// });
// }

// create menu template
const mainMenuTemplate = [
	{
		label: 'Student',
		submenu: [
			{
				label: 'New',
				click() {
					// open create new window
					// createNewWindow();
				}
			},
			{
				label: 'Edit'
			},
			{
				label: 'Quit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
				click() {
					// do something when clicked
					app.quit();
				}
			}
		]
	}
];

// if mac, add empty object to menu
if (process.platform === 'darwin') {
	mainMenuTemplate.unshift({});
}

// add developer tools item when not in production
if (process.env.NODE_ENV !== 'production') {
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu: [
			{
				label: 'Toggle DevTools',
				accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
				click(item, focusedWindow) {
					focusedWindow.toggleDevTools();
				}
			},
			{
				role: 'reload'
			}
		]
	});
}
