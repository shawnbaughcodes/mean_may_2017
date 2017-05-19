app.controller('FriendsController', function() {
    var self = this
    self.getPlayers = function() {
        FriendFactory.getPlayers(function(friends) {
            self.players = friends
            console.log(friends);
        })
    }
})
