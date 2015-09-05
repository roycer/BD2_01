
<?php
include("conexion.php");

echo getOrden();

function getOrden(){
	$sql = 'SELECT * FROM vista_orders';
	return getJSON($sql);
}


if(isset($_GET['newOrden'], $_GET['newOrderItems'], $_GET['List'] )){

	$newOrden = json_decode($_GET['newOrden']);
	$newOrderItems = json_decode($_GET['newOrderItems']);
	$List = json_decode($_GET['List']);
	//$new_date = date('Y-m-d H:i:s', strtotime($HoraFin));

	$order_id  = $newOrden->{'order_id'};
	$customer_id = $newOrden->{'customer_id'};
	$total_amount = $newOrden->{'total_amount'};

	insertar_newOrden($order_id,$customer_id,$total_amount);
	$contador = 0;
	foreach ($List->{'productos_seleccionados'} as $objProductSelect){
		$product_id =  $objProductSelect->{'product_id'};
	    $product_quantity = $newOrderItems->{'product_quantity'}->{$product_id};
	    $order_item_cost = $newOrderItems->{'order_item_cost'}->{$product_id};
	    $contador = $contador + 1;
	    $order_item_id = $order_id . rand(0,9) . $contador;
	    insertar_newOrderItems($order_item_id, $order_id, $product_id, $product_quantity, $order_item_cost);
	}
}

function insertar_newOrden($order_id,$customer_id,$total_amount){
    $pdo = conectar();
    $sql = "INSERT INTO orders (order_id, customer_id, date_order_placed, total_amount, est_registro) VALUES (:order_id, :customer_id, CURDATE(), :total_amount, 1)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array(':order_id'=>$order_id, ':customer_id'=>$customer_id, ':total_amount'=>$total_amount));
}

function insertar_newOrderItems($order_item_id, $order_id, $product_id, $product_quantity, $order_item_cost){
    $pdo = conectar();
    $sql = "INSERT INTO order_items (order_item_id, order_id, product_id, product_quantity, order_item_cost) VALUES(:order_item_id, :order_id, :product_id,:product_quantity, :order_item_cost)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array(':order_item_id'=>$order_item_id,':order_id'=>$order_id,':product_id'=>$product_id,':product_quantity'=>$product_quantity,':order_item_cost'=>$order_item_cost));
}

?>