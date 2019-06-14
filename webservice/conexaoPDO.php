<?php

//**EXEMPLO DE FUNCIONAMENTO*** $Connection = new mysqli( 'localhost', 'usuario', 'senha', 'nome_da_db' );

$conexao = mysqli_connect("mariadb-015.wc1.lan3.stabletransit.com", "341602_prayer", "Password1234", "341602_roa_prayer");

if(mysqli_connect_errno()){
	echo 'Erro na conexão:'.mysqli_connect_errno();
}

?>