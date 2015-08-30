
<?php
include("conexion.php");

echo getOrden();

function getOrden(){
	$sql = 'SELECT * FROM vista_orders';
	return getJSON($sql);
}

?>