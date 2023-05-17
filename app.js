(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
    $scope.lunch_menu="";
    $scope.message="";
    $scope.displayMsg = function(){
        var checkMsg = checkLunchMessage($scope.lunch_menu);
        $scope.message = checkMsg;
    };

    function checkLunchMessage (string){
        var msg="Please enter data first";
        if (string){
            //var dishes = string.split(',').filter(element => element);
            var dishes = string.split(/[ ,]+/);
            if (dishes.length<=3){
                msg="Enjoy";
            }else{
                msg="Too much!";
            }
        }
        return msg;
    };

}

})();