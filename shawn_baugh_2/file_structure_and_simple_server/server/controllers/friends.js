console.log('friends controller');
module.exports = {
  index: function(req,res){
    //your code here
    res.json({placeholder:'index'});
  },
  create: function(req,res){
    //your code here
    var friend = new Friend((
        {name: req.body.name}
    ))
    res.json({placeholder:'create'});
  },
  update: function(req,res){
    //your code here
    res.json({placeholder:'update'});
  },
  delete: function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  },
  show: function(req,res){
    //your code here
    Friend.find({}, function(err, friends){
        res.json({placeholder:'show'});
    })
  }
}
