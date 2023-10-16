const fsPromises = require('fs').promises
const path = require('path')


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8')
        console.log(data)

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n Nice to meet you.')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'),)

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8')
        console.log(newData)
    } catch (error) {
        console.error(error)
    }
}

fileOps()


// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })

// console.log('Hello World...');

// exit on uncaught error
// process.on('uncaughtException', err => {
//     console.error(`There was on uncaught error: ${err}`)
//     process.exit(1)
// })