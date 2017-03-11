var app = angular.module("coolApp");

app.factory("awesomeFactory", function() {
    var ourInfo = {};

    return {
        pass: function(name, age, favFood) {
            ourInfo.name = name;
            ourInfo.age = age;
            ourInfo.favFood = favFood;
            console.log(ourInfo);
        },
        bringItBack: function() {
            return ourInfo;
        }
    };
    
});
