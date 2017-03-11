var app = angular.module("coolApp");

app.controller("coolController", function($scope, $location, awesomeFactory) {

    $scope.sendInfo = function(name, age, favFood){

        console.log(name + " " + age + " " + favFood);

        awesomeFactory.pass(name, age, favFood);

        $location.path("/saygoodbye");

    }

});
