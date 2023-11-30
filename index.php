<?php
//Retornar as boas vindas aos usuarios

	if(isset($_GET['n']) and isset($_GET['a'])){
		$nome = $_GET['n'];
		$apelido = $_GET['a'];
		$fraseFinal = "Bem-vindo(a) ao servidor Sr(a)". $nome.$apelido;
		echo $fraseFinal;
	}
?>

