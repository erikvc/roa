<?php

header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");
header('Content-Type: text/html; charset=utf-8');

require("conexaoPDO.php");

$groupID = $_GET['groupID'];
$userID = $_GET['userID'];
$text = $_GET['text'];

//var_dump($images);



	
				
				
				$sqlPegaTasks = mysqli_query($conexao, "INSERT INTO requests (groupID, memberID, request, creation_date)VALUES('$groupID', '$userID', '$text', NOW())") or die(mysqli_error($conexao));


echo 'ok';


	


?>