'use strict';

//EXPRESS
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(cors()).use('/public', express.static('public'));


function errorHandler(err) {
    if (err) {
        console.log(err.toString())
    }
    console.log('Data recieved from DB');
}

app.listen(port, console.log('App is running'));

// BODY-PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json();

//DOTENV
require('dotenv').config();
//MYSQL
const mysql = require('mysql');
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to db');
        console.log(err);
    }
    console.log('Connection established');

});


app.get('/', (req, res) => {
    res.status(200);
    res.header('Content-Type', 'text/html');
    res.sendFile(__dirname + '/public/index.html');

});




// app.get('/test', (req, res) => {
//     con.query('SELECT * from analiser', function(err, rows) {
//         errorHandler(err);
//         res.send(rows);

//     })
// });

app.post('/api/links', jsonParser, (req, res) => {
    let url = req.body.url;
    let alias = req.body.alias;
    let secretCode = Math.round(Math.random() * 500);
    console.log(secretCode);


    con.query(`INSERT INTO analiser(url,alias,secretCode)
    VALUES ('${url}', '${alias}', '${secretCode}');`, function(err, rows) {
        errorHandler(err);
    });

    con.query('SELECT * FROM analiser', function(err, rows) {
        errorHandler(err);
        res.send(rows);
    })

});

//REDIRECT STUFF

app.get('/a/', (req, res) => {
    let alias = req.query.alias;

    con.query('SELECT * from analiser WHERE alias = "' + alias + '";', function(err, rows) {
        if (rows[0] === undefined) {
            res.sendStatus(404);
        } else {
            con.query('UPDATE analiser set hitCount = hitCount + 1 WHERE alias = "' + alias + '";', function(err, rows) {
                errorHandler(err);
            })
        }
        errorHandler(err);
        res.redirect(rows[0].url);
    })
});

app.get('/api/links', (req, res) => {
    con.query('SELECT id, url, alias, hitCount FROM analiser;', function(err, rows) {
        errorHandler(err);
        res.send(rows);
    })

});

app.delete('/api/links/', jsonParser, (req, res) => {
    let id = parseInt(req.query.id);
    let secret = req.body.secretCode;

    con.query('SELECT * FROM analiser WHERE secretCode = ' + secret + ';', function(err, rows) {
        if  (rows[0]  ===  undefined)  {            
            res.sendStatus(404);
        } 
        else if (rows[0].id != id) {
            res.sendStatus(403);
        } else if (rows[0].id === id && secret === rows[0].secretCode) {
            con.query('DELETE FROM analiser WHERE id = ' + id + ';', function(err, rows) {
                res.sendStatus(204);
            })
        }
        // res.send(rows);
    })


});