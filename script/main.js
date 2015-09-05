var app = angular.module('myApp', ['includeExample','checklist-model','ui.filters']);

app.service('service_Data',function($http){
    var ordenes = [];
    var productos=[];
    var sold=[];
    var categories=[];
    var facturas=[];
    var clientes=[];

    this.hhtpOrden = function (){
        return $http.get("server/orden.php");
    };
    this.hhtpProduct = function (){
        return $http.get("server/producto.php?product");
    };
    this.hhtpSold = function (){
        return $http.get("server/producto.php?sold");
    };
    this.hhtpCategory = function (){
        return $http.get("server/producto.php?category");
    };
    this.hhtpFactura = function (){
        return $http.get("server/factura.php");
    };
    this.hhtpCliente = function (){
        return $http.get("server/cliente.php");
    };

    this.setOrden= function(new_ordenes){ ordenes = new_ordenes;};
    this.setProduct = function(new_productos){productos = new_productos;}
    this.setSold = function(new_sold){sold = new_sold;}
    this.setCategory = function(new_categories){categories = new_categories;}
    this.setFactura = function(new_facturas){facturas = new_facturas;}
    this.setCliente = function(new_clientes){clientes = new_clientes;}

    this.getOrden = function(){ return ordenes;};
    this.getProduct = function(){ return productos;};
    this.getSold = function(){ return sold;};
    this.getCategory = function(){ return categories;};
    this.getFactura = function(){ return facturas;};
    this.getCliente = function(){ return clientes;};
});

app.controller('myCtrl',  function($scope, service_Data) {
    service_Data.hhtpOrden().success(function (response) { 
        service_Data.setOrden(response); 
        $scope.ordenes = service_Data.getOrden();
    });
    service_Data.hhtpProduct().success(function(response){ 
        service_Data.setProduct(response);
        $scope.productos = service_Data.getProduct();
    });
    service_Data.hhtpSold().success(function (response) { 
        service_Data.setSold(response);
        $scope.products_sold = service_Data.getSold();
    });
    service_Data.hhtpCategory().success(function (response) { 
        service_Data.setCategory(response);
        $scope.product_categories = service_Data.getCategory();
    });
    service_Data.hhtpFactura().success(function(response){ 
        service_Data.setFactura(response);
        $scope.invoices = service_Data.getFactura();
    });
    service_Data.hhtpCliente().success(function(response){
        service_Data.setCliente(response);
        $scope.clientes = service_Data.getCliente();
    });
    $scope.ordenarPor = function(orden) { $scope.ordenSeleccionado = orden; };
});

app.controller('myCtrlOrden',  function($scope, $http, service_Data) {

    $scope.List = {};
    $scope.newOrderItems = {};
    $scope.newOrden = {};

    $scope.setTotals = function(){
        var costoTotal = 0;
        for (i = 0; i < $scope.List['productos_seleccionados'].length; i++) { 
          costoTotal += $scope.newOrderItems['order_item_cost'][$scope.List['productos_seleccionados'][i]['product_id']];
        }
        $scope.newOrden.total_amount = costoTotal;
    }

    $scope.add = function(){

        $http({
          method: 'GET',
          url: 'server/orden.php',
          params:{ newOrden: JSON.stringify($scope.newOrden) , newOrderItems: JSON.stringify($scope.newOrderItems) , List: JSON.stringify($scope.List)}  
        });
        service_Data.hhtpOrden().success(function (response) { 
        service_Data.setOrden(response); 
        $scope.ordenes = service_Data.getOrden();
    });

    };
});

app.controller('myCtrlProducto',  function($scope, service_Data) {
    
    
    $scope.productSelect=null;

    
    $scope.detalles = function(objeto) { $scope.productSelect = objeto; };
});

app.controller('myCtrlFactura',  function($scope, service_Data) {
    
    $scope.invoiceSelect = null;

  
    $scope.detalles = function(objeto) { $scope.invoiceSelect = objeto; };
});

app.controller('myCtrlCliente',  function($scope, service_Data) {

    $scope.generos = [{name:'Masculino'},{name:'Femenino'}];
    $scope.customerSelect = null;

    $scope.detalles = function(objeto) { $scope.customerSelect = objeto; };
});



