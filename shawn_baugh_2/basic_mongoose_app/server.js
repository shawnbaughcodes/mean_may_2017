// Require the Express Module
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
// Create an Express App
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modueles'));
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// Routes
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');
// // Use native promises
mongoose.Promise = global.Promise;
// Schema's
var UserSchema = new mongoose.Schema({
     name: String,
     age: Number
}, {timestamps: true})
// register schema
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// INDEX ROUTE
app.get('/', function(req, res) {
    res.render("index");
    User.find({}, function(err, users) {
        if(err){
            req.send(err);
        } else {
            req.send(users);
        }
    })
    console.log('****ROOT****');
})
// This is the route that we already have in our server.js
// When the user presses the submit button on index.ejs it should send a post request to '/users'.  In
//  this route we should add the user to the database and then redirect to the root route (index view).

app.post('/users', function(req, res) {
 // console.log(req.body);
 // This is where we would add the user from req.body to the database.
 // create a new User with the name and age corresponding to those from req.body
  var user = new User(req.body);
  console.log(user);
  // // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
 res.redirect('/');
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
