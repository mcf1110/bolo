app.directive('bolo', function () {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        scope: {
            info: '='
        },
        templateUrl: 'templates/directives/bolo.html',
        controller: function($scope, darkenFilter, Cart){
            $scope.turned = false;
            $scope.info.coberturaDark = darkenFilter($scope.info.cobertura);
            $scope.turn = function(){
                $scope.turned = !$scope.turned;
            }
            
    
            $scope.addToCart = function(bolo){
                Cart.add(bolo);
            }
        }
    }
});