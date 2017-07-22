(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', checkLunch)

    checkLunch.$inject = ['$scope'];
    function checkLunch($scope) {
        $scope.lunchItems = "";
        $scope.inputState = "";
        $scope.msgState = "";


        $scope.performCheck = function () {

            var lunchItems = parseInput();
            var numberOfItems = countItems(lunchItems);
            console.log(numberOfItems);

            setAppropriateMessage(numberOfItems);
            setAppropriateStyle(numberOfItems);
            
        };
        
        function parseInput(input) {
            return $scope.lunchItems.split(',');
        }
        function countItems(items) {
            var itemCount = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].trim() != "")
                    itemCount++;
            }
            return itemCount;
        }
        function setAppropriateMessage(numberOfItems) {

            if (0 == numberOfItems)
                $scope.msg = "Please enter data first";
            else if (numberOfItems > 3)
                $scope.msg = "Too Much!";
            else
                $scope.msg = "Enjoy!";
        }
        function setAppropriateStyle(numberOfItems) {
            console.log(numberOfItems);
            if (0 < numberOfItems && 3 >= numberOfItems) {
                $scope.inputState = "inputSuccess";
                $scope.msgState = "msgSuccess";
                return;
            }
            $scope.inputState = "inputError";
            $scope.msgState = "msgError";

        }





    }
})();