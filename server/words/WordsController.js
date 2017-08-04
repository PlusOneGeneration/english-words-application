'use strict'

let mongoose = require('mongoose');
let Word = mongoose.model('Word');

var exports = module.exports = {};

exports.getCategories = function (req, res, next) {
    Word.distinct('tags')
        .lean()
        .exec()
        .then((categories) => res.json(categories))
};

exports.getWords = function (req, res, next) {

    let query = {};
    if (req.query.category) {
        query = {'tags': req.query.category};
    }

    Word.find(query)
        .skip(+req.query.skipping)
        .limit(+req.query.numberOfWords)
        .sort({'priority': 1})
        .lean()
        .exec()
        .then((words) => {
                res.json(words)
            },
            (err) => {
                console.log('err', err);
            });
};

exports.getFavorite = function (req, res, next) {
    Word.find({ _id: { $in: req.body }})
        .lean()
        .exec()
        .then((words) => {
                res.json(words)
            },
            (err) => {
                console.log('err', err);
            });
};