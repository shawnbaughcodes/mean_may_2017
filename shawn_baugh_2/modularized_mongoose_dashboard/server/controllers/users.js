var mongoose = require('mongoose');
var Quote = mongoose.model('User');
module.exports = {
    show: function(req, res){
        User.find({}, function(err, quotes){
            res.render('main', {users: users});
        })
    },
    create: function(req, res) {
        var user = new User({name: req.body.name, email: req.body.email});
        quote.save(function(err){
            if(err){
                console.log('Somethings not right here');
            } else {
                res.redirect('/')
            }
        })
    }
}
