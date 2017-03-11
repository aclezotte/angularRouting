var app = angular.module("coolApp");

app.factory("awesomeFactory", function() {
    var ourInfo = {};

    return {
        pass: pass,
        bringItBack: bringItBack
    };

    function pass(name, age, favFood) {

        ourInfo.name = name;
        ourInfo.age = age;
        ourInfo.favFood = favFood;
        console.log(ourInfo);

    }

    function bringItBack() {

        return ourInfo;

    }

});
