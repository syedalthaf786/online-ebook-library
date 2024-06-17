<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="sigup1.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
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

</head>
<body>
    <div class="container">
      <?php
if(isset($_POST['login']))
{
  $email=$_POST['email'];
  $password=$_POST['password'];
  require_once "database.php";
  $sql="select * from studentdata where email='$email'";
  $res=mysqli_query($conn,$sql);
  $user=mysqli_fetch_array($res , MYSQLI_ASSOC);
  if($user){
   if(password_verify($password,$user['password'])){
    echo "<script>alert('welcome to nmrec ebook library:',username)</script>"; 
     echo "<script>window.location.href='book_list.php'</script>";
         die();
   }
   else{
    echo "<div class='alert alert-danger'>password does not match</div>";
   }
  }
  else{
    echo "<div class='alert alert-danger'>Email does not exit</div>";
  }
}
      ?>
    <h2 align="center">login</h2>
    <form id="signupForm" action="login.php" method="POST">
      <!-- <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="enter the username" required> -->
      <div class=form-group>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="enter the college email" pattern=".+@nmrec.edu.in" class='form-control' required>
           </div>
<div class=form-group>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="enter the password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class='form-control' required>
</div class="form-btn">
      <input type="submit" value="login" class='btn btn-primary' id="button" name='login'><br>
      <input type="submit" value="signup" class='btn btn-primary' id="button" onclick="window.location.href='singup.php'" name='signup'>

</div>
    </form>
  </div>
  <br><br>
  <footer class="footer">
    <div class="container text-center">
      <span class="text-muted"><a style="color: #00A1E1; " href="home1.html">Nmrec E-library</a>&copy;2024. All Rights Reserved.
</span>
    </div>
  </footer>

  <!-- Bootstrap JS (optional) -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</
  </body>
</html>