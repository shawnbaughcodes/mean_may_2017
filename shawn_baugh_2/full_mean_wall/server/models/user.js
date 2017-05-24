console.log('Users model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/**************************************
            USER SCHEMA
**************************************/

var UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Must have Full Name']
    },
    username: {
        type: String,
        required: [true, 'Must have a Username']
    },
    email: {
        type: String,
        required: [true, 'Must have Email'],
        validate: {
            validator: function(v){
                return /\S*\@\S*\.\S+/g.test(v);
            },
            message: 'Email must be valid.',
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Must enter a Password']
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],},
    {timestamps: true})

UserSchema.methods.hashPassword = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
UserSchema.methods.authenticate = function (password) {
    return bcrypt.compareSync(password, this.password);
}
UserSchema.pre('save', function(callback) {
    this.hashPassword(this.password);
    callback();
});

var User = mongoose.model('User', UserSchema)
