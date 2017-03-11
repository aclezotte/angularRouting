var app = angular.module("coolApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/sayhello", {
            controller: "coolController",
            templateUrl: "sayhello.html"
        })
        .when("/saygoodbye", {
            controller: "coolController",
            templateUrl: "saygoodbye.html"
        })
        .otherwise({redirectTo: "/"});

        $locationProvider.hashPrefix("");
});

app.controller("coolController", function($scope) {

});
