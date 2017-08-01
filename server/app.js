'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const path = require('path');
const fallback = require('express-history-api-fallback');
require('now-logs')('RRp2xP5tNgSXQVJm4hCiiEFC');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.enable('trust proxy');
app.set('trust proxy', 1);

// app.use('/', express.static(__dirname + '../front/src'));

// mongoose.connect('mongodb://mongodb:27017/words');
mongoose.connect('mongodb://irina1707:dbnfkmtdyf1707@ds131583.mlab.com:31583/words');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});
require('./index')(app);
const staticDir = path.join(__dirname, './../front/dist');
app.use(express.static(staticDir));
app.use(fallback('index.html', {root: staticDir}));
// app.use('/*', express.static(__dirname + '../front/src'));


app.listen(3000, function () {
    console.log('App listening on port 3000!')
});
