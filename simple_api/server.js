var express = require('express');
var api = require('./api');
var port = 5000;
var app = express();

app.use(express.json({ extended: true }));

app.use('/api', api)

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});
