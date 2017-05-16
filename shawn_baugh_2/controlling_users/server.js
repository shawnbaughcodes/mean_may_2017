var express = require('express');
var bp = require('express');

var app = express();

app.use(express.static(__dirname + '/clients'));
app.use(express.static(__dirname + '/bower_components'));

app.listen(8000, function() {
    console.log('Listening on 8000 and every other server here...');
})
