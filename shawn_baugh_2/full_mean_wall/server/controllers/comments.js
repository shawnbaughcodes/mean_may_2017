console.log('Comments Controller');
var mongoose = require('mongoose');
/****************************************
            MESSAGES CONTROLLER
****************************************/
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');
var User = mongoose.model('User');

module.exports = {
  index: function(req,res){
      console.log("index");
    Comment.find({}, function (err, comments) {
        if(err){
            return res.json(err)
        }
        return res.json(comments);
    })
  },
  create: function(req,res){
    //your code here
    var comment =new Message(req.body)
    Comment.create(req.body, function(err, comment){
        if(err){
            return res.json(err)
        }
        Message.findById(req.body.message, function(err, message){
            if(err){
                return res.json(err)
            }
            message.comments.push(comment._id);
            message.save(function(err, message){
                if(err){
                    return res.json(err)
                }
                User.findById(req.body.user, function(err, user){
                    if(err){
                        return res.json(err)
                    }
                    user.comments.push(user._id);
                    user.save(function(err, user){
                        if(err){
                            return res.json(err)
                        }
                        return res.json(comment)
                    })
                })
            })
        })
    })
  },
  delete: function(req,res){
    Comment.findByIdAndRemove(req.params.id).exec(function(err, comment){
        if(err){
            return res.json(err)
        }
        return res.json(comment)
    })
  },
  show: function(req,res){
    //your code here
    Comment.findById(req.params.id).exec(function(err, comment){
        if(err){
            return res.json(err)
        }
        return res.json(comment);
    })
  },
}
