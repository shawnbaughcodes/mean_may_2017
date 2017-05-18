var express = require('express');
var bp = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.json());

app.listen(8000, function() {
    console.log('Listening on yo mf server...8000...all day....by myself...');
})
