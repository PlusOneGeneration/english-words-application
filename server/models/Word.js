'use strict'
module.exports = function () {
    let mongoose = require('mongoose');
    let Schema = mongoose.Schema;

    let wordSchema = new Schema({
        text: String,
        completed: Boolean,
        priority: Number,
        images: [String],
        translation: {},
        translations: [{}],
        sentences: [{}],
        tags: []

    });
    wordSchema.index({priority: 1});
    wordSchema.index({priority: 1, tags: 1});

    let Word = mongoose.model('Word', wordSchema);
};
