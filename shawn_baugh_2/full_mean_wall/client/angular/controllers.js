/**************************************
    ANGULAR USERS CONTROLLER
**************************************/
app.controller('UsersController', function(UserFactory, $cookies, $location){
    console.log('Loading Users Controller');
    // GLOBAL SHIT
    var self = this
    self.registration_errors = []
    self.login_errors = []

    // SESSION SHIT
    self.session = function(){
		UserFactory.session(function(user){
			console.log('user: ', user);
			if(user){
				self.current_user = user;
			} else {
				$location.url('/');
			}
		})
	}

    // LOGIN SHIT
    self.login = function(loginUser) {
        self.login_errors = []
        UserFactory.login(loginUser, function(res){
            if(res.data.errors){
                for(key in res.data.errors){
                    var error = res.data.errors[key];
                    self.login_errors.push(error.message)
                }
            } else {
                $cookies.put('user_id', res.data._id);
                $location.url('/home')
            }
        })
    }

    // LOGOUT SHIT
    self.logout = function(){
        $cookies.remove('user_id')
        $location.url('/')
    }

    // CREATE SHIT
    self.create = function(newUser){
        self.registration_errors = [];
        console.log('Heres your new user... ' + newUser);
        UserFactory.create(newUser, function(res){
            console.log(res);
            if(res.data.errors){
                for(key in res.data.errors){
                    var error = res.data.errors[key];
                    self.registration_errors.push(error.message)
                }
            } else {
                var user_id = res.data._id;
                $cookies.put('user_id', user_id)
                $location.url('/home')
            }
        })
    }

    // LOGIN SHIT
    self.login = function(loginUser) {
        self.login_errors = []
        UserFactory.login(loginUser, function(res){
            if(res.data.errors){
                for(key in res.data.errors){
                    var error = res.data.errors[key];
                    self.login_errors.push(error.message)
                }
            } else {
                $cookies.put('user_id', res.data._id);
                $location.url('/home')
            }
        })
    }

    // GET USER SHIT
    self.getUsers = function(){
        UserFactory.index(function(res){
            console.log(res);
            self.users = res.data;
        })
    }
})
/**************************************
    MESSAGES ANGULAR CONTROLLER
**************************************/
app.controller('MessagesController', function(UserFactory, MessageFactory, CommentFactory, $cookies, $location){
    console.log('loading Messages Controller');
    // GLOBAL SHIT
    var self = this
    self.messages = [];
    self.new_message_errors = [];
    self.newMessage = {};

    self.create = function(newMessage){
		self.new_message_errors = [];
		UserFactory.session(function(user){
			newMessage.user = user._id;
			MessageFactory.create(newMessage, function(res){
				if(res.data.errors){
					for(key in res.data.errors){
						var error = res.data.errors[key];
						self.new_message_errors.push(error.message)
					}
				} else {
					self.index();
				}
			})
		})
	}

    self.index = function(){
        MessageFactory.index(function(res){
            self.messages = res.data
            console.log(res.data);
        })
    }

    self.createComment = function(newComment, index, message_id){
        newComment = newComment[index]
        newComment.message = message_id
        // console.log('New Comment ' + newComment);
        UserFactory.session(function(user){
            newComment.user = user._id;
            CommentFactory.create(newComment, function(res){
                self.index()
            })
        })
        self.newComment = {}
    }
})
