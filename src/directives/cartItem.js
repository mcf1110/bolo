app.directive('cartItem', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/cartItem.html',
        scope: {
            'item' : '=',
            'index' : '='
        },
        controller: function($scope, Cart){
            $scope.removeItem = function(){
                Cart.remove($scope.index);
            };
        }
    }
});