const { logEvents } = require('./logEvents');

const errorHandler = (err, req, resp, next) => {
    logEvents(`${err.name}: ${err.message}`, 'error.txt');
    console.error(err.stack);
    resp.status(500).send(err.message);
}

module.exports = errorHandler;