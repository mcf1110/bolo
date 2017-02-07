app.directive('boloSvg', function () {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        scope: {
            info: '='
        },
        templateUrl: 'templates/directives/boloSvg.html',
        controller: function($scope, darkenFilter){
            $scope.$watch('info.cobertura.cor', function(){
                $scope.info.coberturaDark = darkenFilter('#' + $scope.info.cobertura.cor);
            })
        }
    }
});