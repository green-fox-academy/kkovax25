'use strict';

// VARIABLES / FUNCTIONS
let posts;

function errorHandler(err) {
    if (err) {
        console.log(err.toString())
    }
    console.log('Data recieved from DB');
}
// EXPRESS
const express = require('express');
const app = express();
const port = 8080;
app.listen(port);

// BODY-PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json();

//DOTENV
require('dotenv').config();

// MYSQL

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
// LANDING
app.get('/', (req, res) => {
    res.send('hello world');
});

// SHOW POSTS
app.get('/posts', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'application/json')
    con.query('SELECT * FROM posts', function(err, rows) {
        errorHandler(err);
        posts = rows;
        res.send({ posts });
    });

});

// POST POSTS
app.post('/posts', jsonParser, (req, res) => {
    // let title = Object.keys(req.body)[0];
    let titleValue = req.body.title;
    // let url = Object.keys(req.body)[0];
    let urlValue = req.body.url;
    // console.log(title);
    // console.log(titleValue);
    // console.log(url);
    // console.log(urlValue);
    res.status(200);
    res.set('Content-Type', 'application/json');


    con.query(`INSERT INTO posts(title, url, timestamp) 
    VALUES ('${titleValue}', '${urlValue}', NOW());`, function(err, rows) {
        errorHandler(err);
    });

    con.query('SELECT * FROM posts ORDER BY id DESC LIMIT 1;', function(err, rows) {
        errorHandler(err);
        posts = rows;
        res.send({ posts });
    });

});

//UPVOTE/DOWNVOTE
app.put('/posts/:postId/:voteType', jsonParser, (req, res) => {
    let postId = req.params.postId;
    let voteType = req.params.voteType;
    // console.log(postId);
    // console.log(voteType);

    if (voteType === 'upvote') {
        con.query('UPDATE posts SET score = score + 1 WHERE id = ' + postId + ';', function(err, rows) {
            errorHandler(err);
        })
    } else if (voteType = 'downvote') {
        con.query('UPDATE posts SET score = score - 1 WHERE id = ' + postId + ';', function(err, rows) {
            errorHandler(err);

        });
    };

    con.query('SELECT * FROM posts WHERE id = ' + postId + ';', function(err, rows) {
        errorHandler(err);
        posts = rows;
        res.send({ posts });
    });


});

//DELETE
app.delete('/posts/:postId', jsonParser, (req, res) => {
    let postId = req.params.postId;

    con.query('SELECT * FROM posts WHERE id = ' + postId + ';', function(err, rows) {
        errorHandler(err);
        posts = rows;
        res.send({ posts });
    });

    con.query('DELETE FROM posts WHERE id = ' + postId + ';', function(err, rows) {
        errorHandler(err);
    });


});

//UPDATE
app.put('/posts/:postId', jsonParser, (req, res) => {
    let postId = req.params.postId;
    let title = Object.keys(req.body)[0];
    let titleValue = req.body.title;
    let url = Object.keys(req.body)[1];
    let urlValue = req.body.url;
    // console.log(title);
    // console.log(titleValue);
    // console.log(url);
    // console.log(urlValue);

    con.query("UPDATE posts SET " + title + " = '" + titleValue + "', " + url + " = '" + urlValue + "' WHERE id = " + postId + ";", function(err, rows) {
        errorHandler(err);
    });


    con.query('SELECT * FROM posts WHERE id = ' + postId + ';', function(err, rows) {
        errorHandler(err);
        posts = rows;
        res.send({ posts });
    });

});