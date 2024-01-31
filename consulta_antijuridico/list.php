<?php
    
    session_start();
    include 'db/conexion.php';
    

    if (!isset($_SESSION['validador'])) {
      header('location:index.php');
    }else{

    }

    $anti = mysqli_query($conexion,"SELECT * FROM $user");

    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--STYLE-->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!--STYLE FONTAWESOME-->
    <script src="https://kit.fontawesome.com/27010df775.js" crossorigin="anonymous"></script>
    <!--FUNCTIONS JAVASCRIPT-->
    <script src="js/jquery.min.js"></script>

    <title>Consulta de personas inhabilitadas</title>
</head>
<body>

<div class="header">
  <img class="logo-idexud" src="img/logo_idexud.png" alt="">
  <img class="logo-ud" src="img/logo-ud.png" alt="">
</div>

<hr class="line">

<h2>Sistema de consulta Antijurídico</h2>

<div class="wrapper">
  <div class="container">
     <div class="filter">
       <div class="row">
         <div class="col-sm-4">
           <div class="show-row">
             <select class="form-control">
               <option value="10000" selected="selected">5</option>
             </select>
           </div>
         </div>
         <div class="col-sm-4"></div>
         <div class="col-sm-16">
           <div class="search-row">
             <input type="text" name="search" class="form-control" placeholder="Enter your keyword">
           </div>
         </div>
         <br>
       </div>
     </div>
     <div class="contenedor-tabla">
          <table id="persons" class="table table-responsive table-hover">
            <thead>
              <tr  class="myHead">
                <th class="border-top-left">#</th>
                <th>NOMBRES</th>
                <th>NÚMERO DE IDENTIFICACIÓN</th>
                <th class="border-top-right">ESTADO</th>
              </tr>
            </thead>
            <tbody>

            <?php
            while ($datos2 = mysqli_fetch_array($anti)){
                $id = $datos2['id'];
                $names = $datos2['nombres'];
                $document = $datos2['documento'];
                $status = $datos2['estado'];

                echo    '<tr>
                            <td>'.$id.'</td>
                            <td class="no-center">'.$names.'</td>
                            <td>'.$document.'</td>
                            <td>'.$status.'</td>
                        </tr>';
            }
            ?>
              
            </tbody>
          </table>
     </div>
  
 
</div>

</div>
 <div class="video_box">
   <div class="video_inner">
     <div class="modal-close">&times;</div>
     <div class="video_body">
       
     </div>
   </div>
 </div>


 <div class="close_session">
  <a href="db/close.php"><i class="fa-solid fa-door-open"></i></a>
 </div>


 <script src="js/script.js"></script>

</body>
</html>