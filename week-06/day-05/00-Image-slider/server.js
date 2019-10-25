const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('./'))


// homepage
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);

});