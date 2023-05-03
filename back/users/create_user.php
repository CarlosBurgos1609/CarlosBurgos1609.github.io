<?php
    //create_user.php
    //  include("../config/cnx_db.php");
    //llamar al servidor creado
    include '../config/cnx_db.php';
    $Name = $_POST['nombre'];
    $Name2 = $_POST['nombre2'];
    $numero = $_POST['número'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    //colocar los nombres de los campos de la base de datos y luego de los que se coloca en php users
    $sql = "INSERT INTO user( nombre, nombre2, número, email, password) VALUES ('$Name','$Name2','$numero','$email', '$password')";
    // $test = "INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created_at`, `update_at`, `delete_at`) VALUES (NULL, '', '', '', '', current_timestamp(), NULL, NULL)";
    // echo $sql;
    //$conn->query($sql);
    // if ($conn->query($sql) === true) {
    //     //se creo satisfactoriamente
    //     echo "User has been created successfully";
    // }
    // else{
    //         //mostrar el error
    //         echo"Error: ".$conn->error."<br>".$sql;
    //     }
     if ($conection->query($sql) === true) {
         //se creo satisfactoriamente
         // echo "User has been created successfully";
         echo "<script>alert('User has been created successfully')</script>";
         // header("Location: http://localhost/market/front/login.html");
         //header("Refresh:0; url=http://localhost/market/front/login.html");
         header("refresh: 0; url=http://localhost/CarlosBurgos1609.github.io/index.html");
     }
     else{
         //mostrar el error
         // echo"Error: ".$conn->error."<br>".$sql;
         echo" <script>alert('Email already exist')</script";
         //header ("refresh:0; url=http://localhost/market/front/creaete_user.html");
     }
    
?>