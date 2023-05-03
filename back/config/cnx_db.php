<?
    //Developer: Carlos
    //database:conexion-Database engine conection
    //credenciales
    $host = "127.0.0.1"; //127.0.0.1,localhost
    $username = "root";
    $password = "";
    $dbname = "portafolio";
    $port = "3306";
    //Mysqul connection
    $conection = new mysqli($host, $username, $password, $dbname, $port);
    //Check conmecttion
    if ($conection->connect_error) {
        die("Connection failed:" . $conection ->connect_error);
    }
    
     else {
         echo "Connection succesfully";
     }
?>