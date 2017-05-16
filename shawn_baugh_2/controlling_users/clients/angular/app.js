var app = angular.module('app', []);
app.controller('UsersController', function($scope) {
    $scope.users = [
        {
            first_name: 'Billy',
            last_name: 'John',
            favorite_language: 'Ruby'
        }
    ]
    $scope.printIndex = function(val){
        console.log(val);
    }
    $scope.addUser = function(newUser) {
        console.log(newUser);
        $scope.users.push(newUser);
        $scope.newUser = {}
    }
    $scope.deleteUser = function(user) {
        console.log(user);
        var i =$scope.users.indexOf(user);
        $scope.users.splice(i, 1);
    }
})
