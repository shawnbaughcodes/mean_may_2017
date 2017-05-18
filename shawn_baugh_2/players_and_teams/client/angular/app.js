var app = angular.module('app', ['ngRoute']);
// ***************CONFIGS**************
app.config(function($routeProvider) {
    $routeProvider
    .when('/players', {
        templateUrl: 'partials/players.html',
        controller: 'PlayersController as PC'
    })
    .when('/teams', {
        templateUrl: 'partials/teams.html',
        controller: 'TeamsController as TC'
    })
    .when('/associations', {
        templateUrl: 'partials/associations.html',
        controller: 'AssociationsController as AC'
    })
    .otherwise({
        templateUrl: 'partials/invalid_page.html'
    })
});
// **************FACTORIES***************
app.factory('PlayerFactory', function(){
    var factory = {}
    factory.players =[
        {name: 'Joe'},
        {name: 'Bill'},
        {name: 'Grady'},
        {name: 'Cindy'},
    ]
    factory.getPlayers = function(callback) {
        callback(this.players)
    }
    factory.addPlayer = function(newPlayer) {
        factory.players.push(newPlayer)
    }
    factory.deletePlayer = function(player, callback) {
        console.log(player)
        var i = this.players.indexOf(player);
        this.players.splice(i, 1);
        callback();
    }
    return factory
})
app.factory('TeamFactory', function(){
    var factory = {}
    factory.teams = [
        {name: 'Warriors'},
        {name: 'Bulls'},
        {name: 'Colts'},
        {name: 'Cowboys'},
    ]
    factory.getTeams = function(callback) {
        callback(this.teams)
    }
    factory.addTeam = function(newTeam) {
        factory.teams.push(newTeam)
    }
    factory.deleteTeam = function(team, callback) {
        var i = this.teams.indexOf(team);
        this.teams.splice(i, 1)
        callback();
    }
    return factory
})
app.factory('AssociationFactory', function(){
    var factory = {}
    factory.associations = [
        {
            pname: 'Steph',
            tname: 'Warriors'
        },
        {
            pname: 'Michael',
            tname: 'Bulls'
        },
        {
            pname: 'Andrew',
            tname: 'Colts'
        },
    ]
    factory.getAssociations = function(callback) {
        callback(this.associations)
    }
    factory.addAssociation = function(newAssociation) {
        factory.associations.push(newAssociation)
    }
    factory.deleteAssociation = function(association, callback) {
        var i = this.associations.indexOf(association);
        this.associations.splice(i, 1)
        callback();
    }

    return factory
})
// **************CONTROLLERS*************
// PLAYER CONTROLLER
app.controller('PlayersController', function(PlayerFactory) {
    var self = this
    self.getPlayers = function() {
        // console.log('get players');
        PlayerFactory.getPlayers(function(players) {
            self.players = players
            console.log(players);
        })
    }
    self.addPlayer = function() {
        console.log('Add Player');
        PlayerFactory.addPlayer(self.newPlayer)
            self.getPlayers();
            self.newPlayer = {}
    }
    self.deletePlayer = function(player) {
        PlayerFactory.deletePlayer(player, function(){
            self.getPlayers();
        })
    }
})
// TEAM CONTROLLER
app.controller('TeamsController', function(TeamFactory) {
    var self = this
    self.getTeams = function() {
        TeamFactory.getTeams(function(teams) {
            self.teams = teams
        })
    }
    self.addTeam = function() {
        TeamFactory.addTeam(self.newTeam)
        self.getTeams();
        self.newTeam = {}
    }
    self.deleteTeam = function() {
        TeamFactory.deleteTeam(self.team, function(){
            self.getTeams();
        })
    }
})
// ASSOCIATIONS CONTROLLER
app.controller('AssociationsController', function(AssociationFactory){
    var self = this
    self.getAssociations = function() {
        AssociationFactory.getAssociations(function(associations) {
            self.associations = associations
        })
    }
    self.addAssociation = function() {
        AssociationFactory.addAssociation(self.newAssociation)
        self.getAssociations();
        self.newAssociation = {}
    }
    self.deleteAssociation = function() {
        AssociationFactory.deleteAssociation(self.association, function(){
            self.getAssociations();
        })
    }
})
