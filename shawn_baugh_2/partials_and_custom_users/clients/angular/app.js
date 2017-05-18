var app = angular.module('app', ['ngRoute']);
// console.log('angular')
app.config(function($routeProvider) {
    $routeProvider
    .when('/partial1',{
        // console.log('p1');
        templateUrl: "partials/customizeUsers.html",
        controller: 'UserController as UC',
    })
    .when('/partial2',{
        templateUrl: "partials/userList.html",
        controller: 'UserController as UC'
    })
    .otherwise({
        redirectTo: '/'
    });
});
// **************FACTORIES******************
app.factory('UserFactory', function() {
    var factory = {}
    factory.users = [
        {fname: 'Billy',
         lname: 'Bob',
         favlanguage: 'Ruby'
     },
        {fname: 'John',
         lname: 'Smith',
         favlanguage: 'Python'
     },
        {fname: 'Jody',
         lname: 'Killin',
         favlanguage: 'Spanish'
     }
 ]
    factory.getUsers = function (callback) {
        callback(this.users)
    }
    factory.addUser = function(newUser) {
        factory.users.push(newUser)
    }
    factory.deleteUser = function(user, callback) {
        var i = this.users.indexOf(user);
        this.users.splice(i, 1);
        callback();
    }
    return factory
})
// **************CONTROLLERS****************
app.controller('UserController', function(UserFactory) {
    var self = this
    self.getUsers = function(){
        // console.log('Get Users');
        UserFactory.getUsers(function(users) {
            self.users = users
        })
    }
    self.addUser = function() {
        UserFactory.addUser(self.newUser)
        self.getUsers();
        self.newUser = {}
        console.log(self.newUser);
    }
    self.deleteUser = function() {
        UserFactory.deleteUser(self.user,function() {
            self.getUsers();
        })
    }
})
