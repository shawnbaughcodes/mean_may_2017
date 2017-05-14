var express = require('express');
var path = require('path');
var bp = require('body-parser');
var mongoose = require('mongoose');
// var session = require('express-session');

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modueles'));
app.use(bp.urlencoded({ extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo')
mongoose.Promise = global.Promise;
var quote_arr = []

// ************SCHEMA'S***************
var QuoteSchema = new mongoose.Schema({
    name: {
        'type': String,
        'minlength': [2, 'Please enter a longer name']
    },
    quote: {
        'type': String,
        'minlength': [2, 'Please enter full quote']
    }
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');


// ***********INDEX ROUTE*************
// get route
app.get('/', function(req, res){
    res.render('index');
})
// post route
app.post('/quotes', function(req, res){
    // console.log(req.body);
    var quote = new Quote(req.body);
    console.log(quote);
    // SAVE QUOTE
    quote.save(function(err) {
        if(err) {
            res.send(err);
        } else {
            quote_arr.push(quote)
            res.redirect('/quote_page')
        }
    })
    // res.redirect('/');
})
// **********QUOTES ROUTE**************
app.get('/quote_page', function(req, res){
    Quote.find({}, function(err, quotes) {
        if(err){
            // res.send(err)
            console.log(err);
        } else {
            // res.send(quotes)
        }
    })
    res.render('quote_page', {quotes: quote_arr});

})
app.listen(8000, function(){
    console.log('listening on port 8000...bruh...');
})
