
<?php
include("conexion.php");

echo LeerOrden();

function LeerOrden(){
	$sql = 'SELECT * FROM vista_orders';
    
	$dbh = conectar();
    $stmt = $dbh->prepare( $sql );
    $stmt->execute();
    $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $result );

    
    // echo the json string$dbh= null;
  	return  $json;
}

?>