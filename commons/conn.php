<?php

if ($_SESSION['ENVIRONMENT']=='development')
{
	# CONSTANTES DE CONEXIÓN DEV
	define('DATABASE_NAME','qs20121');
	define('SERVER','localhost');
	define('USERNAME','quakerstate');
	define('PASSWORD','9qsLPGYZOqomU');
}
elseif ($_SESSION['ENVIRONMENT']=='production')
{
	# CONSTANTES DE CONEXIÓN PROD
	define('DATABASE_NAME','qs20121');
	define('SERVER','localhost');
	define('USERNAME','quakerstate');
	define('PASSWORD','9qsLPGYZOqomU');
}