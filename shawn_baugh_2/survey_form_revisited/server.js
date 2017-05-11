// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

var server = app.listen(8000, function(){
    console.log('Listening on port 8000 bruh');
})

var io = require('socket.io').listen(server);

// use it!
var users_array = []

io.sockets.on('connection', function(socket){
    console.log('WE ARE USING SOCKETS!');
    console.log(socket.id);

    socket.on("button_clicked", function (data){
        console.log('Somone clicked a button! Reason:' + data.reason);
        socket.emit('server_response', {response: 'sockets are the best!'});

    })
    socket.on('clicked_button',function(data){
        console.log(data)
        console.log('Got some form data');
        var lucky = Math.floor(Math.random()* 1000);
        socket.emit('server_response', data, lucky)
    })
})
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
})


app.get('/something', function(req, res) {
 res.render("something", {users: users_array});
})
// post route for adding a user
// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  // This is where we would add the user to the database
//  // Then redirect to the root route
//  users_array.push(req.body)
//
//  res.redirect('/something');
// })
// tell the express app to listen on port 8000
