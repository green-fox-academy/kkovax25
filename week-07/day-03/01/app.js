const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});

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


})



app.listen(PORT, () => {
    console.log('This server is running on the port of: ' + PORT);

});