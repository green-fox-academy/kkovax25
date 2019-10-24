var express = require('express');

var app = express();

app.use('/assets', express.static('assets'));

// app.get('/', function(req, res) {

//     res.send('This is the app');

// });

// app.get('/contact', function(req, res) {

//     res.send('This is the contact page');

// });

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/index.html');

});

app.listen(3000);