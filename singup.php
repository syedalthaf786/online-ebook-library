<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="sigup1.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>
    /* Custom styles for the footer */
    .footer {
      background-color: #f8f9fa;
      padding: 20px 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
  <style>
    
      </style>
</head>
<body>
  <div class="container">
  <?php
if(isset($_POST['submit'])) {
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$passwordrepeat=$_POST['passwordrepeat'];
$passwordhash=password_hash($password,PASSWORD_DEFAULT);
$errors = array();
if(empty($username) OR empty($email) OR empty($password) OR empty($passwordrepeat)){
    array_push($errors,"All fields are required");
    // echo '<script>window.location.href="singup.php"</script>';
}
if(strlen($password<8)){
    array_push($errors,"password must be eight characters long");
}
if($password!==$passwordrepeat){
    array_push($errors,'password does not match');
}
require_once "database.php";
$sql="select * from studentdata where email='$email'";
 $res=mysqli_query($conn,$sql);
 $row=mysqli_num_rows($res);
if($row>0){
   array_push($errors,"email already exists!");  
}
if(count($errors)>0){
    foreach ($errors as $error) {
        echo "<div class='alert alert-danger' class='h-2 d-inline-block'>$error</div>";  
    }
}
else{
    
     $sql="insert into studentdata (username,email,password) values(?,?,?)";
     $stmt=mysqli_stmt_init($conn);
     $prepareStmt=mysqli_stmt_prepare($stmt,$sql);
     if($prepareStmt){
        mysqli_stmt_bind_param($stmt,'sss',$username,$email,$passwordhash);
        mysqli_stmt_execute($stmt);
        echo "<div class='alert alert-success'>you are sign up successfully </div>";
        echo '<script>window.location.href="login.php"</script>';
     }
     else{
        die("something went worng");
     }
}
} 
?>
    <h2 align="center">Sign Up</h2>
    <form  action="singup.php" method="POST">
      <div class="form group">
      <label for="username">Username</label>
      <input type="text" id="username" class="form-control" name="username" placeholder="enter the username">
      </div>
      <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="enter the college email" pattern=".+@nmrec.edu.in" class="form-control">
      </div>
      <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="enter the password"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">confrim Password</label>
        <input type="password" id="password" name="passwordrepeat" placeholder="enter confirm the password"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class="form-control">
        </div>
      <div class="form-btn">
        <input type="submit" class="btn btn-primary" value="sign up" name="submit" id="button">
      </div><br>
      <!-- <div class='from-btn'>
        <button onclick="location.href="login.php" -->
    </form>
  </div>
  <br><br>
  <footer class="footer">
    <div class="container text-center">
      <span class="text-muted"><a style="color: #00A1E1; " href="home1.html">Nmrec E-library</a>&copy; 2024. All Rights Reserved.
</span>
    </div>
  </footer>

  <!-- Bootstrap JS (optional) -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</
  
</body>

</html>


