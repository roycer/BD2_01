<?php
function conectar(){
    // set up the connection variables
    $db_name  = 'bd2_01';
    $hostname = 'localhost';
    $username = 'root';
    $password = '';

    // connect to the database
    return new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
    // a query get all the records from the users table
}

function getJSON($sql){
    // use prepared statements, even if not strictly required is good practice
    $dbh = conectar();
    $stmt = $dbh->prepare( $sql );

    // execute the query
    $stmt->execute();

    // fetch the results into an array
    $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

    // convert to json
    $json = json_encode( $result,JSON_NUMERIC_CHECK );

    $dbh= null;
    // echo the json string
    return  $json;
}



?>
