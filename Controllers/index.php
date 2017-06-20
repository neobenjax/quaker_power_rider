<?php 

$strJson = file_get_contents($baseURL.'data-demo/carrusel-modos.json');

$modos = json_decode($strJson, true);

$handler->debug($modos, 'Modos');