const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.static('assets'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});
// DOUBLING
app.get('/doubling', (req, res) => {

    if (req.query.input == undefined) {
        let userinput = {
            error: "Please provide an input!"
        }
        res.send(userinput);

    } else {
        let userinput = {
            received: req.query.input,
            result: (req.query.input) * 2
        };
        res.send(userinput);
        res.status(200);
        res.setHeader('Content-type', 'application/json');
    }
});
// GREETER
app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    let response = {};

    if (name != undefined && title != undefined) {
        response = {
            welcome_message: "Oh, hi there " + name + ", my dear " + title + "!"
        };

    } else if (name === undefined && title === undefined) {
        response = {
            error: "Please provide a name and a title!"
        }
    } else if (name != undefined && title === undefined) {
        response = {
            error: "Please provide a title!"
        }
    } else if (name === undefined && title != undefined) {
        response = {
            error: "Please provide a name!"
        }
    }
    res.send(response);

});
// APPEND A
app.get('/appenda/:appendable', (req, res) => {
    let stuff = req.params.appendable + 'a';
    let response = {};

    if (stuff != undefined) {
        response = {
            appended: stuff
        }
        res.send(response);

    } else {
        res.status(404)
        res.send({
            'response': '404: Not Found'
        });
    }

});

// DO UNTIL

app.post('/dountil/:action', jsonParser, (req, res) => {
    let action = req.params.action;
    let input = req.body.until;
    let word = Object.keys(req.body)[0];
    let response = {};
    let total = 0;
    // console.log(action);
    // console.log(number);
    // console.log(word);

    if (action === 'sum') {
        let sumFunc = (number) => {
            for (let i = 1; i <= number; i++) {
                total += i;
            }
            return total
        }
        response = {
            result: sumFunc(input)
        }
    } else if (action === 'factor') {
        let factorio = (number) => {
            let total = 1
            for (let i = 1; i <= number; i++) {
                total *= i;
            }
            return total
        }
        response = {
            'result': factorio(input)
        }
    } else if (action === undefined) {
        response = {
            error: "Please provide a number!"
        }
    }

    res.send(response);


});


app.listen(PORT);