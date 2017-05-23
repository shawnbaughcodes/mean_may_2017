app.factory('UserFactory', function($http, $cookies){
    console.log('Factories');
    var factory = {}
    factory.index = function(callback){
        $http.get('/users').then(callback)
    }
    factory.create = function(newUser, callback){
        $http.post('/users', newUser).then(callback)
    }
    factory.session = function() {
        return $cookies.get('user_id');
    }
    factory.login = function(loginUser, callback){
        $http.post('/sessions', loginUser).then(callback);  
    }

    return factory
})
