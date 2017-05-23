// FRIENDS CONTROLLER
console.log('Friends Controller');
app.controller('FriendsController', function() {
    var self = this
    self.getPlayers = function() {
        FriendFactory.getPlayers(function(friends) {
            self.players = friends
            console.log(friends);
        })
    }
})

// NEW CONTROLLER
console.log('New controller');
app.controller('NewController', ['$scope','friendsFactory', function($scope, friendsFactory) {
  var index = function () {
      friendsFactory.index(function(data) {
          console.log(data);
          $scope.friends = data;
      })
  }
  index();
  $scope.create = function() {
      friendsFactory.create($scope.newFriend, function(data) {
          // If we needed to display an updated list of friends on this page, we would have to do this;
          $scope.friends = data;
      });
  }
}]);

// EDIT CONTROLLER
console.log('Edit controller');
app.controller('editController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
   friendsFactory.show($routeParams.id, function(returnedData){
     $scope.friend = returnedData;
     console.log($scope.friend);
   });
   $scope.update(/*What goes here?*/)
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
