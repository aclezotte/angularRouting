var app = angular.module("coolApp");

app.controller("secondController", function($scope, awesomeFactory) {

    $scope.userInfo = awesomeFactory.bringItBack();

});
