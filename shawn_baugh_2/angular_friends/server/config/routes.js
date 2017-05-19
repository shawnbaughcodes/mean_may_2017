console.log('Future routes');
var fs = require('fs');
var path = require('path');

var controllers_path = path.join(__dirname, './../controllers');

fs.readdirSync(controllers_path).forEach(function(file) {
    if(file.indexOf('js') >= 0){
        console.log('loading ' + file +'...');
        require(controllers_path + '/' + file);
    }
});

module.exports = function(app) {
    app.get('/friends', function(req, res) {
        friends.index(req, res);
    });
    app.get('/friends/:id', function(req, res) {
        friends.show(req, res);
    });
    app.post('/friends', function(req, res) {
        friends.create(req, res);
    });
    app.put('/friends/:id', function(req, res) {
        friends.update(req, res);
    });
    app.delete('/friends/:id', function(req, res) {
        friends.delete(req, res);
    });
}
