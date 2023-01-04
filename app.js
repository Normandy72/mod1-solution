(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.message = "";
        $scope.list = "";

        $scope.checkIfTooMuch = function(){
            if($scope.list === ''){
                $scope.message = 'Please enter data first!';

            }
            else{
                $scope.array = $scope.list.split(',');
                if($scope.array.length <= 3){
                    $scope.message = 'Enjoy!';
                }
                else if($scope.array.length > 3){
                    $scope.message = 'Too much!';
                }
            }            
        };
    };
})();