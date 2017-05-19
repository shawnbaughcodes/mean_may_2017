var app = angular.module('app', ['ngRoute', 'ngMessages'])

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/index.html',
        // controller: 'UsersController as UC'
    })
    .when('/new', {
        templateUrl: 'partials/new.html'
    })
    .when('/edit', {
        templateUrl: 'patials/edit.html'
    })
    .when('/show', {
        templateUrl: 'partials/show.html'
    })
    .otherwise({
        templateUrl: 'partials/invalid.html'
    });
});
