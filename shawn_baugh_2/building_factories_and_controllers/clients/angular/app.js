var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/index.html',
        controller: 'FriendsController as FC'
    })
    .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'NewController as NC'
    })
    .when('/edit', {
        templateUrl: 'patials/edit.html',
        controller: 'EditController as EC'
    })
    .when('/show', {
        templateUrl: 'partials/show.html',
        controller: 'FriendsController as FC'
    })
    .otherwise({
        templateUrl: 'partials/invalid.html'
    });
});
