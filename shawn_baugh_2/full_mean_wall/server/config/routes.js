console.log('Seeing routes');
/**********************************************
        USERS, MESSAGES,COMMENTS ROUTES
**********************************************/
var Users = require('./../controllers/users.js')
var Messages = require('./../controllers/messages.js')
var Comments = require('./../controllers/comments.js')

module.exports = function(app){
    // USERS
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.post('/sessions', Users.login);
	app.get('/users/:id', Users.show);
    // MESSAGES
    app.get('/messages', Messages.index);
	// app.get('/messages/:id', Messages.show);
    app.post('/messages', Messages.create);
    // COMMENTS
    app.get('/comments', Comments.index);
	app.post('/comments', Comments.create);
	// app.get('/comments/:id', Comments.show);
}
