console.log('Users Controller');
var mongoose = require('mongoose');
/****************************************
            USERS CONTROLLER
****************************************/
var User = mongoose.model('User');

module.exports = {
  index: function(req,res){
      console.log("index");
    User.find({}).exec(function (err, users) {
        if(err){
            return res.json(err)
        }
        return res.json(users);
    })
  },
  create: function(req,res){
    //your code here
    var user = new User(req.body)
    user.save(function(err, user){
        if(err){
            return res.json(err)
        }
        return res.json(user)
    })
  },
  // update: function(req,res){
  //   //your code here
  //   User.findById(req.params.id).exec(function(err, user){
  //       if(err){
  //           return res.json(err)
  //       }
  //       if(!user){
  //           return res.json({
  //               errors: 'user not found'
  //           });
  //       }
  //       user.name = req.body.name;
  //       user.save(function(err, user){
  //           if(err){
  //               return res.json(err)
  //           }
  //           return res.json(user)
  //
  //       })
  //   })
  //
  // },
  delete: function(req,res){
    User.findByIdAndRemove(req.params.id).exec(function(err, user){
        if(err){
            return res.json(err)
        }
        return res.json(user)
    })
  },
  show: function(req,res){
    //your code here
    User.findById(req.params.id).exec(function(err, user){
        if(err){
            return res.json(err)
        }
        return res.json(user);
    })
  },
  login: function(req, res) {
      User.findOne({username: req.body.username}, function(err, user){
        if(err){
            return res.json(err)
        }
        if(user && user.authenticate(req.body.password)){
            return res.json(user)
        } else{
            return res.json({
                "errors":{
                    "password":{
                        "message": "Invalid credientials."
                    }
                }
            })
        }
    })
  }
}
