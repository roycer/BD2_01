var app = angular.module('myApp', ['includeExample','checklist-model']);

app.controller('myCtrl',  function($scope, $http) {
  $http.get("server/orden.php").success(function (response) {$scope.ordenes = response;});

});

app.controller('myCtrlOrden',  function($scope, $http) {
    
});

app.controller('myCtrlProducto',  function($scope, $http) {
    $http.get("server/producto.php").success(function(response){$scope.productos = response;})
});

app.controller('myCtrlFactura',  function($scope, $http) {
    
});

app.controller('myCtrlCliente',  function($scope, $http) {

  $http.get("server/cliente.php").success(function(response){$scope.clientes = response;});
  $scope.generos = [{name:'Masculino'},{name:'Femenino'}];

  $scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden;
  };
});



