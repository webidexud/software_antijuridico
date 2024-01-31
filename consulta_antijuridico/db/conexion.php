<?php

    $host = 'idexud.udistrital.edu.co';
    $usuario = 'antijuridico_user';
    $contraseña = 'uFJaU6Fw5Pbb1VLXmA';
    $basedatos = 'antijuridico';
    $port = '3339';

    $user = 'usuario_antijuridico';

    $conexion = new mysqli($host,$usuario,$contraseña,$basedatos,$port);

    if ($conexion->connect_errno) {
        echo "fallos en conexión";
        exit();
    }

?>