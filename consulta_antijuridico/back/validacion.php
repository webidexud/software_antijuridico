<?php

include '../db/conexion.php';


    $pass = $_POST['password'];

    $consulta = mysqli_query($conexion, "SELECT * FROM usuarios_sistema
                            where pass = '$pass'");
    $exist = mysqli_num_rows($consulta);

    if ($exist == 1) {
        session_start();
        while ($datos = mysqli_fetch_array($consulta)) {
            $_SESSION['validador'] = $datos['pass'];
        }
        header('location:../list.php');
    }else {
        header('location:../index.php');
    }


?>