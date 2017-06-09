'use strict'
module.exports = function (app) {

    let WordsController = require('./WordsController');

    app.get('/api/categories', WordsController.getCategories);

    app.get('/api/words', WordsController.getWords);

}