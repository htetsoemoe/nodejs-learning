const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const logEvents = require('./logEvents')
const EventEmitter = require('events')
class Emitter extends EventEmitter {

}

// Initialize Emitter Object
const myEmitter = new Emitter()

// PORT Number
const PORT = process.env.PORT || 3500

// create server
const server = http.createServer((req, resp) => {
    console.log(req.url, req.method)
})

// listen server at specified port
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))