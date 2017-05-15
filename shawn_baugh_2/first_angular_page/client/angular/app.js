var app = angular.module('app', []);

app.controller('UserController', function($scope){
    $scope.myName = 'Shawn'
    $scope.favoriteLanguage = 'Javascript'
    $scope.favoriteJSLibrary = 'Angular'
})
