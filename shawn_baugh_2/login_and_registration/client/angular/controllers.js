app.controller('UsersController', function(UserFactory, $cookies, $location){
    console.log('UsersController');

    var self = this
    self.registration_errors = []
    self.login_errors = []

    self.session = function () {
        var state = UserFactory.session();
        console.log(state);
        if(!state){
            $location.url('/')
        }
    }



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

    self.getUsers = function(){
        UserFactory.index(function(res){
            console.log(res);
            self.users = res.data;
        })
    },
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
})
