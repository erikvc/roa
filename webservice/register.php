<?php

header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");
header('Content-Type: text/html; charset=utf-8');

require("conexaoPDO.php");

$first = $_POST['first'];
$last = $_POST['last'];
$last = $_POST['last'];
$email = $_POST['email'];
$password = $_POST['password'];

//var_dump($images);



		$tiposPermitidos= array('gif', 'jpeg', 'jpg', 'pjpeg', 'png');
		$images    = $_FILES['imagem']['name'];
		$imagesType    = $_FILES['imagem']['type'];
		$rand	   = rand();
		$errorUpload = 'N';
        
			
			if (array_search($imagesType, $tiposPermitidos) === false && $password1 == $password2) {
                $images = str_replace("'", "", $images);
				$imgFileName = $rand.$images;
				$path 		 = '../images/temp/'.$imgFileName;

				move_uploaded_file($_FILES['imagem']['tmp_name'], $path);
                
                include("resize-class.php");
                $resizeObj = new resize('../images/temp/'.$imgFileName);
                $resizeObj -> resizeImage(200, 200, 'crop');
                $resizeObj -> saveImage('../images/'.$imgFileName, 80);
				
				
				$sqlPegaTasks = mysqli_query($conexao, "INSERT INTO users (first, last, email, password, photo, creation_date)VALUES('$first', '$last', '$email', '$password', '$imgFileName', NOW())") or die(mysqli_error($conexao));
				
				
                
                $removeTemp = unlink('../images/temp/'.$imgFileName);
				
				echo 'ok';
			}else{
				echo 'File format not allowed!';
			}

	$ultimoID = mysqli_insert_id($conexao);
				
				$deletaRegistro = mysqli_query("DELETE FROM users WHERE id = '$ultimoID'");		


?>