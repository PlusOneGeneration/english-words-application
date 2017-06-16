'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.enable('trust proxy');
app.set('trust proxy', 1);

app.use('/', express.static(__dirname + '../front/src'));

mongoose.connect('mongodb://localhost/words');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});
require('./index')(app);
app.use('/*', express.static(__dirname + '../front/src'));


app.listen(3200, function () {
    console.log('App listening on port 3200!')
});
