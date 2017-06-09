'use strict'

let mongoose = require('mongoose');
let Word = mongoose.model('Word');

var exports = module.exports = {};

exports.getCategories = function (req, res, next) {
    Word.distinct('tags')
        .exec()
        .then((categories) => res.json(categories))
};

exports.getWords = function (req, res, next) {

    let query = {};

    if (req.query.category) {
        query = {'tags': req.query.category};
    }

    Word.find(query)
        .skip(req.query.skipping)
        .limit(req.query.numberOfWords)
        .sort({'priority': 1})
        .exec()
        .then((words) => res.json(words));
};