(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', FoodController)

    FoodController.$inject = ['$scope','$filter'];
    function FoodController($scope, $filter) {
        $scope.items = "";
        $scope.parseInput = function () {
            
            var foods = $scope.items;
            foods = foods.split(',');
            console.log(foods);
            $scope.msg = "Too Much!";

        };


    }
})();