const express = require('express');
const router = express.Router();
const path = require('path')

// the request has arrived in this folder(router), you'll get the following error
// ENOENT: no such file or directory, stat 'D:\nodejs-learning\chapter-8-express-routers\routers\views\index.html'
// we need to get out of this folder(router) one level above
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
});

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});

module.exports = router;