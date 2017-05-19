app.factory('FriendFactory', function(callback){
    var factory = {}
    factory.friends =[
        {
        first_name: 'John',
        last_name: 'Williams',
        birthday: 1992/03/23
    }
    ]
    factory.getFriends = function(callback) {
        callback(this.friends)
    }
})
