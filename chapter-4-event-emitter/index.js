const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {

}

// initialize Emitter object
const myEmitter = new MyEventEmitter()

// add event handler or listener to 'EventEmitter' object
myEmitter.on('log', (msg) => logEvents(msg))

// Emit event in 2 seconds after index.js run
setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!')
}, 2000)