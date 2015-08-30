
<?php
include("conexion.php");

if(isset($_GET['product'])){
    echo getProductos();
}

if(isset($_GET['sold'])){
    echo getVendidos();
}

if(isset($_GET['category'])){
    echo getCategory();
}

function getProductos(){
    $sql = 'SELECT * FROM vista_product';
    return  getJSON($sql);
}

function getVendidos(){
    $sql = 'SELECT * FROM vista_product_sold';
    return  getJSON($sql);
}

function getCategory(){
    $sql = 'SELECT * FROM vista_product_categories';
    return  getJSON($sql);
}


?>
