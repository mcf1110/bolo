app.directive('cart', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/cart.html',
        controller: function($scope, $timeout, Cart) {
            $scope.showCart = false;
            $scope.handleClick = function(){
                $scope.showCart = !$scope.showCart;
            };
            
            $scope.items = Cart.get();
            
            $scope.anim = false;
            $scope.$on('cartChange', function(){
                $scope.anim = true;
                $timeout(function(){
                     $scope.anim = false;
                }, 1000);
            })
        }
    }
});
