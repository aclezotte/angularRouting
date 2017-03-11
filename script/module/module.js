var app = angular.module("coolApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/sayhello", {
            controller: "coolController",
            templateUrl: "view/sayhello.html"
        })
        .when("/saygoodbye", {
            controller: "secondController",
            templateUrl: "/view/saygoodbye.html"
        })
        .otherwise({redirectTo: "/"});

    $locationProvider.hashPrefix("");
});
