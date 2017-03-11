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

app.controller("coolController", function($scope) {
    $scope.sendInfo = function(name, age, favFood){
        console.log(name + " " + age + " " + favFood);
    };
});

app.controller("secondController", function($scope) {
    $scope.moreCoolStuff = "This is more cool stuff";
});
