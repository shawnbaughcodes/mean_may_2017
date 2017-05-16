var app = angular.module('app', [])

app.factory('ProductFactory',function() {
    var factory = {}
    factory.products = [
        {
            name: 'Keyboard',
            price: 149.99
        },
        {
            name: 'Mouse',
            price: 59.99
        },
        {
            name: 'Basketball',
            price: 59.99
        },
    ];
    factory.getProducts = function(callback) {
        callback(this.products);
    }
    factory.addProduct = function(newProduct) {
        factory.products.push(newProduct)
    }
    factory.deleteProduct = function(product, callback) {
        var i = this.products.indexOf(product);
        this.products.splice(i, 1);
        callback();
    }


    return factory
})

app.controller('ProductController', function($scope, ProductFactory) {
    console.log('numba 1');
    $scope.getProducts = function() {
        console.log('numba 2');
        ProductFactory.getProducts(function(products) {
            $scope.products = products
            console.log(products);
        })
    }

    $scope.addProduct = function() {
        ProductFactory.addProduct($scope.newProduct)
        $scope.getProducts();
        $scope.newProduct = {}
        console.log($scope.newProduct);
    }
    $scope.deleteProduct = function() {
        ProductFactory.deleteProduct($scope.product,function() {
            $scope.getProducts();
        })

    }
})
