<?php
$servername="localhost";
$dbuser="root";
$dbpassword="";
$dbname="studentdb";
$conn=mysqli_connect($servername,$dbuser,$dbpassword,$dbname);
if(!$conn){
    die("something went worng");
}
?>