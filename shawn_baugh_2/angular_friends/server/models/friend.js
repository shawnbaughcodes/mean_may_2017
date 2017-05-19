console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    birthday: {
        type: Number,
        require: true,
    }
})

var Friend = mongoose.model('Friend', FriendSchema)
