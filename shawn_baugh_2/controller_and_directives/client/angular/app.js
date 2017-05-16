var app = angular.module('app', [])
app.controller('FoodController', function($scope) {
    $scope.items = [
        {food: 'Pizza'},
        {food: 'BBQ'},
        {food: 'Fries'},
        {food: 'Salad'},
        {food: 'Steak'},
    ]
    $scope.moreFood = function(){
        $scope.morefood = [
            {food: 'Ice Cream'},
            {food: 'Fried Chicken'},
            {food: 'Fried Chicken'},
            {food: 'Garlic Bread'},
        ]
    }
    $scope.h2_state = true;
    $scope.changeState = function(){
        $scope.h2_state = !$scope.h2_state;
    }
    $scope.addFood = function(newFood) {
        console.log(newFood);
        $scope.items.push(newFood)
        $scope.newFood = {}
    }
})
