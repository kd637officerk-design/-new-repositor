// Preload script – runs in an isolated context before the web page loads.
// You can expose limited, safe APIs to the renderer here if needed later.

const { contextBridge } = require('electron');

// Example of a safe API you could expose later:
// contextBridge.exposeInMainWorld('electronAPI', {
//   platform: process.platform,
//   getVersion: () => require('../package.json').version
// });

// For now we keep it minimal. The original Capacitor check will simply
// see that window.Capacitor is undefined and fall back to web behavior.
console.log('Diario Electron preload loaded');
