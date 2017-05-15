var users = require('../controllers/users.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index')
    })
    app.post('/users', function (req, res){
        users.create(req, res)
    })
    app.get('/', function(req, res){
        users.show(req, res)
    })
}
