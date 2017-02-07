app.controller("produtosCtrl", function(Bolos, $scope){
    Bolos.get().then(function(b){
        $scope.bolos = b;
    });
})