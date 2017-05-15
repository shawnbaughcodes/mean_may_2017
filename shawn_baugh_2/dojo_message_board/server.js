var express = require('express');
var path = require('path');
var bp = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modueles'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dojo_message_board');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
// SCHEMA'S
var MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})
mongoose.model('Message', MessageSchema);

var Message = mongoose.model('Message');
var msg_arr = []

// *******INDEX ROUTE***************
// get route
app.get('/', function(req, res){
    res.render('index');
    var message = new Message(req.body);
    console.log(message);
    // SAVE MESSAGE
    message.save(function(err){
        if(err){

        }
    })
})

app.listen(8000, function(){
    console.log('Listening on your server....kinda creepy huh?.....');
})
