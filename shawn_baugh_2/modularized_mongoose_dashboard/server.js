var express = require('express');
var path = require('path');
var bp = require('body-parser');

var app = express();

app.use(bp.json({extended : true}));
app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs');

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes.js')

routes_setter(app)

app.listen(8000, function() {
    console.log('Lisenting on your mf server bruh....');
})
