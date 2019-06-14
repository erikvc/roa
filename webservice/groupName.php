<?php

header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");
header('Content-Type: text/html; charset=utf-8');


require("conexaoPDO.php");

$id = $_GET['id'];

$getGroup = mysqli_fetch_assoc(mysqli_query($conexao, "SELECT * FROM opto_groups WHERE id = '$id'")) or die(mysqli_error($conexao));


$groupName[0]['groupName'] = $getGroup['name'];
$groupName[0]['groupID'] = $getGroup['id'];



echo json_encode($groupName);
?>