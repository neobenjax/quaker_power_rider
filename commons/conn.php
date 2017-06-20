<?php

if ($_SESSION['ENVIRONMENT']=='development')
{
	# CONSTANTES DE CONEXIÓN DEV
	# CONSTANTES DE CONEXIÓN DEV
	define('DATABASE_NAME','qs2012_test2017');
	define('DATABASE_NAME_FILTRO','qselector2017');
	define('SERVER','71.19.228.214');
	define('USERNAME','dev');
	define('PASSWORD','c0d1c32015');
	define('USERNAME_FILTRO','dev');
	define('PASSWORD_FILTRO','c0d1c32015');
}
elseif ($_SESSION['ENVIRONMENT']=='production')
{
	# CONSTANTES DE CONEXIÓN PROD
	define('USERNAME','pp_qs2012test');
	define('DATABASE_NAME','qs2012_test');
	define('DATABASE_NAME_FILTRO','qselector');
	define('SERVER','71.19.228.214');
	define('PASSWORD','q520122016');
	define('USERNAME_FILTRO','dev');
	define('PASSWORD_FILTRO','c0d1c32015');
}