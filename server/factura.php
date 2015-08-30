<?php
include("conexion.php");

echo getFacturas();	

function getFacturas(){
    $sql = 'SELECT * FROM vista_invoices';
    return  getJSON($sql);
}




?>
