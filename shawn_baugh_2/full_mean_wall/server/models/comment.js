console.log('Comments model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**************************************
            COMMENTS SCHEMA
**************************************/

var CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    comment: {
        type: String,
    }},
    {timestamps: true})

mongoose.model('Comment', CommentSchema)
