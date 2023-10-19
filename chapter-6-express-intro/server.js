const express = require('express');
const app = express();
const path = require("path")

const PORT = process.env.PORT || 3500;

// NodeJS route handler works from top to bottom
app.get('^/$|/index(.html)?', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, resp) => {
    resp.redirect(301, '/new-page.html'); // 302 by default
});

// Route Handlers
app.get('/hello(.html)?', (req, resp, next) => {
    console.log("Attempted to load hello.html");
    next(); // call next handler in chain
}, (req, resp) => {
    resp.send('Hello World!');
});

// Chaining Route Handlers
const one = (req, resp, next) => {
    console.log('One');
    next();
}

const two = (req, resp, next) => {
    console.log('Two');
    next();
}

const three = (req, resp, next) => {
    console.log('three');
    resp.send('Finished: end of route handler chain.');
}

app.get('/chain(.html)?', [one, two, three]);

app.get('/*', (req, resp) => {
    resp.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, () => console.log(`NodeJS server running on ${PORT}`));