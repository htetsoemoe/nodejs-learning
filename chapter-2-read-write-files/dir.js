const { error } = require('console')
const fs = require('fs')

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (error) => {
        if (error) {
            console.error(error)
        }
        console.log('Directory Created')
    })
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', (error) => {
        if (error) {
            console.error(error)
        }
        console.log('Directory Removed')
    })
}

// exit on uncaught error
process.on('uncaughtException', err => {
    console.error(`There was on uncaught error: ${err}`)
    process.exit(1)
})