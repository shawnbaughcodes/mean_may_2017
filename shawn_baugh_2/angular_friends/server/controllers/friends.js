console.log('friends controller');
module.exports = {
  index: function(req,res){
    //your code here
    Friend.find({}).exec(function (err, friends) {
        if(err){
            return res.json({placeholder:'index'})
        }
        return res.json({placeholder:'index'});
    })
  },
  create: function(req,res){
    //your code here
    var friend =new Friend(req.body)
    friend.save(function(err, user){
        if(err){
            return res.json(err)
        }
        return res.json({placeholder:'create'})
    })
  },
  update: function(req,res){
    //your code here
    Friend.findById(req.params.id).exec(function(err, friend){
        if(err){
            return res.json({placeholder:'update'})
        }
        if(!user){
            return res.json({
                error: 'user not found'
            });
        }
        user.name = req.body.name;
        user.save(function(err, friend){
            if(err){
                return res.json({placeholder: 'update'})
            }
            return res.json({placeholder: 'update'})

        })
    })

  },
  delete: function(req,res){
    //your code here
    Friend.findByIdAndRemove(req.params.id).exec(function(err, friend){
        if(err){
            return res.json({placeholder: 'delete'})
        }
        return res.json({placeholder: 'delete'})
    })
  },
  show: function(req,res){
    //your code here
    Friend.findById(req.params.id).exec(function(err, friend){
        if(err){
            return res.json({placeholder:'show'})
        }
        return res.json({placeholder:'show'});
    })

  }
}
