var app = angular.module("coolApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/sayhello", {
            controller: "coolController",
            templateUrl: "sayhello.html"
        })
        .when("/saygoodbye", {
            controller: "secondController",
            templateUrl: "saygoodbye.html"
        })
        .otherwise({redirectTo: "/"});

    $locationProvider.hashPrefix("");
});

app.controller("coolController", function($scope, $location, awesomeFactory) {

    $scope.sendInfo = function(name, age, favFood){

        console.log(name + " " + age + " " + favFood);

        awesomeFactory.pass(name, age, favFood);

        $location.path("/saygoodbye");

    }

});

app.controller("secondController", function($scope, awesomeFactory) {

    $scope.userInfo = awesomeFactory.bringItBack();

});
