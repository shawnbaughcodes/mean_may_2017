console.log('Messages model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**************************************
            MESSAGE SCHEMA
**************************************/

var MessageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: [true, 'Must type message.']
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]},
    {timestamps: true})

mongoose.model('Message', MessageSchema)
