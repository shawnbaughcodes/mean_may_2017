console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
})

var Friend = mongoose.model('Friend', FriendSchema)
