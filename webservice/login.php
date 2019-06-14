<?php

header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");
header('Content-Type: text/html; charset=utf-8');


require("conexaoPDO.php");

	$email = $_POST['email'];
	$password = $_POST['password'];

	//$email = $_GET['email'];
	//$password = $_GET['password'];

	if(!empty($email)){
		$selectUser = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
		$runUser = mysqli_query($conexao, $selectUser) or die(mysqli_error($conexao));
		$verifica = mysqli_num_rows($runUser);
		$pegaID = mysqli_fetch_assoc($runUser);
        if($verifica != 0){
            echo $pegaID['id'];
        }else{
            echo 'erro1'; //USER NOT EXIST!!!
        }
	}else{
		echo "erro2"; //EMAIL FIELD VAZIO!!!!!
	}


?>