module.exports = function (app) {
    require('./server/models/Word')();
    require('./server/words/words')(app);

};