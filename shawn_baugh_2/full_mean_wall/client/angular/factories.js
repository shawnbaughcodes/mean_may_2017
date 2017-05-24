/******************************************
            USER FACTORY
******************************************/
app.factory('UserFactory', function($http, $cookies) {
    console.log('loading factories');

    var factory = {}

    // USERS INDEX
    factory.index = function (callback){
        $http.get('/users').then(callback)
    }
    // USERS CREATE
    factory.create = function(newUser, callback){
        $http.post('/users', newUser).then(callback)
    }
    // USERS SESSION
    factory.session = function(callback) {
        var user_id = $cookies.get('user_id');
    		if(!user_id){
    			return callback(false);
    		}
    		$http.get('/users/' + user_id).then(function(res){
    			if(res.data.errors){
    				return callback(false)
    			}
    			return callback(res.data);
    		})
    	}
    // USERS LOGIN
    factory.login = function(loginUser, callback){
        $http.post('/sessions', loginUser).then(callback);
    }

    return factory;
})

/******************************************
            MESSAGE FACTORY
******************************************/
app.factory('MessageFactory', function($http){
    var factory = {}

    factory.create = function(newMessage, callback){
        $http.post('/messages', newMessage).then(callback);
    }

    factory.index = function(callback){
        $http.get('/messages').then(callback)
    }

    return factory
})
/******************************************
            COMMENT FACTORY
******************************************/
app.factory('CommentFactory', function($http){
    var factory = {}

    factory.create =  function(newComment, callback){
        $http.post('comments', newComment).then(callback)
    }
    return factory
})
