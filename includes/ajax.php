<?php 
session_start();
include_once '../commons/helpers.php';
$helpers = new Helpers();

$baseURL = $_SESSION['baseURL'];

if(isset($_POST) && isset($_POST["action"])){
	$action = $_POST["action"];

	if($action == "send-form"){
		if(
			isset($_POST["nombre"])
			&& isset($_POST["apellidos"])
			&& isset($_POST["email"])
			&& isset($_POST["mensaje"])
		){
			$query_insert = "insert into contacto_power_ride
								(nombre, apellidos, email, mensaje)
							values (:nombre, :apellidos, :email, :mensaje)";

			$params_insert = array(
								array(
									"id" => "nombre",
									"size" => 200,
									"tipo" => PDO::PARAM_STR,
									"content" => $_POST["nombre"]
								),
								array(
									"id" => "apellidos",
									"size" => 200,
									"tipo" => PDO::PARAM_STR,
									"content" => $_POST["apellidos"]
								),
								array(
									"id" => "email",
									"size" => 200,
									"tipo" => PDO::PARAM_STR,
									"content" => $_POST["email"]
								),
								array(
									"id" => "mensaje",
									"size" => 1000,
									"tipo" => PDO::PARAM_STR,
									"content" => $_POST["mensaje"]
								)
							);

			$helpers->insertDataSanitize($query_insert, $params_insert, false);

			$to = "";
			$from = $_POST["email"];
			$subject = "Quaker Power Ride - Contacto";
			$message = "";

			//$helpers->sentMail($subject, $message, $to);
			echo "ENTRA";
		}
	}

	$_POST["action"] = "no-available";
}
?>