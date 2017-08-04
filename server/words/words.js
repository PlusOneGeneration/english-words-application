'use strict'
module.exports = function (app) {

    let WordsController = require('./WordsController');

    app.get('/api/categories', WordsController.getCategories);

    app.post('/api/words/favorite', WordsController.getFavorite);

    app.get('/api/words', WordsController.getWords);

}