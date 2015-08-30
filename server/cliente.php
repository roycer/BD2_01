
<?php
include("conexion.php");

echo getCliente();

function getCliente(){
    $sql = 'SELECT * FROM vista_customer';
    return getJSON($sql);
}

?>
