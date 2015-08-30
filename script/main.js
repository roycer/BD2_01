var app = angular.module('myApp', ['includeExample','checklist-model','ui.filters']);

app.controller('myCtrl',  function($scope, $http) {
 
  

});

app.controller('myCtrlOrden',  function($scope, $http) {
     $http.get("server/orden.php").success(function (response) {$scope.ordenes = response;});
     $scope.ordenarPor = function(orden) { $scope.ordenSeleccionado = orden; };
});

app.controller('myCtrlProducto',  function($scope, $http) {
    $http.get("server/producto.php?product").success(function(response){ $scope.productos = response;})
    $http.get("server/producto.php?sold").success(function (response) { $scope.products_sold = response;});
    $http.get("server/producto.php?category").success(function (response) { $scope.product_categories = response;});
    $scope.productSelect=null;

    $scope.ordenarPor = function(orden) { $scope.ordenSeleccionado = orden; };
    $scope.detalles = function(objeto) { $scope.productSelect = objeto; };
});

app.controller('myCtrlFactura',  function($scope, $http) {
    $http.get("server/factura.php").success(function(response){ $scope.invoices = response;})
    $scope.invoiceSelect = null;

    $scope.ordenarPor = function(orden) { $scope.ordenSeleccionado = orden; };
    $scope.detalles = function(objeto) { $scope.invoiceSelect = objeto; };
});

app.controller('myCtrlCliente',  function($scope, $http) {

    $http.get("server/cliente.php").success(function(response){$scope.clientes = response;});
    $scope.generos = [{name:'Masculino'},{name:'Femenino'}];
     $scope.customerSelect = null;
    $scope.ordenarPor = function(orden) { $scope.ordenSeleccionado = orden; };
    $scope.detalles = function(objeto) { $scope.customerSelect = objeto; };
});



