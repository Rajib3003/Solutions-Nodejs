
const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on('ring', () => {    
    console.log('Yahoo class shes!');
})
schoolBell.on('broken', () => {    
    console.log('Yahoo no class ki are shes hobe na!');
})

schoolBell.emit('ring'); 
schoolBell.emit('broken'); 

