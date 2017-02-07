app.directive('personalizado', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/personalizado.html',
        controller: function($scope, Cart, Sabores) {
            $scope.hide = true;
            $scope.toggleModal = function(){
                $scope.hide = !$scope.hide;
            }
            
            $scope.sabores = {
                coberturas: [],
                massas: [],
                recheios: []
            };
            Sabores.get().then(function(s) {
                $scope.sabores = s;
                $scope.bolo.cobertura = s.coberturas[0];
                $scope.bolo.massa = s.massas[0];
                $scope.bolo.recheio = s.recheios[0];
            });
            
            $scope.bolo = {
                cobertura : {},
                massa: {},
                recheio: {},
                preco: 0,
                nome: "Especial"
            }
            
            $scope.getPreco = function (){
               return $scope.bolo.cobertura.preco + $scope.bolo.massa.preco + $scope.bolo.recheio.preco;
            }
            
            $scope.add = function(){
                $scope.bolo.preco = $scope.getPreco();
                Cart.add($scope.bolo);
                $scope.toggleModal();
            }
        }
    }
});
