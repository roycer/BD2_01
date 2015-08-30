
<?php
include("conexion.php");

echo selectCliente();

function selectCliente(){
    $sql = 'SELECT * FROM vista_customer';
    // use prepared statements, even if not strictly required is good practice
    $dbh = conectar();
    $stmt = $dbh->prepare( $sql );

    // execute the query
    $stmt->execute();

    // fetch the results into an array
    $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

    // convert to json
    $json = json_encode( $result );

    $dbh= null;
    // echo the json string
    return  $json;
}
?>
