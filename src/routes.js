app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/main.html"
  })
  .when("/produtos", {
    templateUrl : "templates/produtos.html",
    controller: "produtosCtrl"
  })
  .when("/sobre", {
    templateUrl : "templates/sobre.html"
  })
  .otherwise('/');
  
  $locationProvider.html5Mode(true);
});