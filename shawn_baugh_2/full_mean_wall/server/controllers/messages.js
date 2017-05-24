console.log('Messages Controller');
var mongoose = require('mongoose');
/****************************************
            MESSAGES CONTROLLER
****************************************/
var Message = mongoose.model('Message');
var User = mongoose.model('User')

module.exports = {
  index: function(req,res){
    Message.find({}).populate('user').populate({
        path: 'comments',
        model: 'Comment',
        options: { sort: {createdAt: -1}},
        populate: {
            path: 'user',
            model: 'User'
        }
    }).sort('-createdAt').exec(function (err, messages) {
        // console.log(messages);
        if(err){
            return res.json(err)
        }
        return res.json(messages);
    })
  },
  create: function(req, res){
		Message.create(req.body, function(err, message){
			if(err){
				return res.json(err);
			}
			User.findById(req.body.user, function(err, user){
				if(err){
					return res.json(err)
				}
				user.messages.push(message._id)
				user.save(function(err, user){
					if(err){
						return res.json(err);
					}
					return res.json(message);
				})
			})
		})
	},
}
