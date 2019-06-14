<?php

header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");
header('Content-Type: text/html; charset=utf-8');


require("conexaoPDO.php");

$id = $_GET['id'];

$sqlPegaMembers = mysqli_query($conexao, "SELECT * FROM requests WHERE groupID = '$id'") or die(mysqli_error($conexao));


$array_retorno = array();

while($rows = mysqli_fetch_array($sqlPegaMembers)){
	
	$memberID = $rows['memberID'];
	$groupID = $rows['groupID'];
	
	$getMember = mysqli_fetch_assoc(mysqli_query($conexao, "SELECT * FROM users WHERE id = '$memberID'")) or die(mysqli_error($conexao));
	$getGroup = mysqli_fetch_assoc(mysqli_query($conexao, "SELECT * FROM opto_groups WHERE id = '$groupID'")) or die(mysqli_error($conexao));
	
	//echo $rows['imagem'];
	$enviarArray['id'] = $rows['id'];
	$enviarArray['member_id'] = $getMember['id'];
	$enviarArray['member_image'] = $getMember['photo'];
	$enviarArray['member_fname'] = $getMember['first'];
	$enviarArray['member_lname'] = $getMember['last'];
	$enviarArray['group_id'] = $getGroup['id'];
	$enviarArray['group_name'] = $getGroup['name'];
	$enviarArray['group_description'] = $getGroup['description'];
	$enviarArray['request'] = $rows['request'];
	$enviarArray['creation_date'] = date('m/d/Y', strtotime($rows['creation_date']));
		
	array_push($array_retorno, $enviarArray);
	
}


echo json_encode($array_retorno);
?>