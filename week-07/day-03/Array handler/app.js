const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.static('assets'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json();

app.post('/arrays', jsonParser, (req, res) => {
    let what = req.body.what;
    let array = req.body.numbers
        // console.log(req.body.what);
        // console.log(req.body.numbers);
        // summ
    let result = {};
    let finalNumb = 0;

    if (what === 'sum') {
        for (let i = 0; i < array.length; i++) {
            finalNumb += array[i]
        }
        result = {
            result: finalNumb
        }

    } else if (what === 'multiply') {
        finalNumb = 1;
        for (let i = 0; i < array.length; i++) {
            finalNumb *= array[i]
        }
        result = {
            result: finalNumb
        }
    } else if (what === 'double') {
        finalNumb = [];
        for (let i = 0; i < array.length; i++) {
            finalNumb.push(array[i] * 2)
        }
        result = {
            result: finalNumb
        }
    } else if (what != 'sum' || 'multiply' || 'double') {
        result = {
            error: "Please provide what to do with the numbers!"
        }
    }
    res.send(result);

});

app.listen(PORT);