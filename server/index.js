module.exports = function (app) {
    require('./models/Word')();
    require('./words/words')(app);

};