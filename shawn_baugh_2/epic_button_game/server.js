var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

var server = app.listen(8000, function(){
    console.log('Listening on port 8000 bruh');
})
var io = require('socket.io').listen(server);
var num = []
var number = 0
io.sockets.on('connection', function(socket){
    console.log('WE ARE USING SOCKETS!');
    console.log(socket.id);

    socket.on('plus_pressed', function (data){
        num.push(number++)
        console.log(data.msg);
        socket.emit('server_response', {msg: 'sent_back'}, num)
    })
});


app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index", {num:num});
    })
