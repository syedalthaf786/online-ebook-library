<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>
    /* Custom styles for the footer */
    
  </style>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <title>E books</title>
    <style>
      body{
        background-image:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.8)),url(imgs/bg.png);
      background-repeat: no-repeat;
       background-size:cover;
       background-position:center;
       min-height:120vh;
      
      }
        .ebook {
            display:inline-block;
            margin: 10px;
            text-wrap:wrap;
            text-align: center;

        }
        .ebook img {
            width: 150px;
            height: 200px;
            border-radius:20px;
        }
        .ebook a{
          text-decoration:none;
        }
        

.do-bt {
          background: blue;
          color: white;
          text-decoration: none;
          text-align: center;
          padding: 5px;
          border-radius: 10px;
        }
        .do-bt:hover {
          background: rgb(85, 85, 122);
          color: white;
        }
        .ebook {
          width: fit-content;
          margin: 10px 10px;
          padding: 10px;
          border: 2px  black;
          box-shadow: 0px 0px 10px rgb(30, 7, 7);
          border-radius: 15px;
          transition: transform 2s;
          background-color:grey;
          color:black;
        
        }
        .navbar {
      perspective: 500px;
    margin:10px auto; 
      border-radius:20px;
      max-width: 1000px;
      background:white;
    }

    
.search-container {
  float: right;
  margin-bottom:20px;
}

input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .search-container {
    float: none;
  }
  input[type=text],.search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  input[type=text] {
    border: 1px solid #ccc;  
  }
}
#d{
  border:1px solid black;
}
hr{
  border:1px solid white;
}
.footer {
      background-color: #f8f9fa;
      padding: 5px 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    input[type="submit"] {
            background-color: #007bff;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        #btn{
          position:absolute;
          top:10px;
          right:10px;
        }
      
    </style>
</head>
<body>
<nav class="navbar navbar-dark bg-light">
  <img src="logo-3.png" width="150px">
  <div class="search-container">
    <form method='get'>
      <input type="text" placeholder="Search.." name="search" id="d">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</nav>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<input type="submit" onclick="logout()" value="logout" id="btn">
    <script>
        function logout(){
        window.location.href="home1.html";
        }
    </script>
<hr>
    <div class="ebook-container">
        <?php
            // Connect to the database
            $host = 'localhost';
            $username = 'root';
            $password = '';
            $database = 'ebooks';

            $conn = new mysqli($host, $username, $password, $database);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Fetch ebooks data from the database
            $sql = "SELECT * FROM bood_upload";
            
            // Check if search query is set
            if(isset($_GET['search'])) {
                $search = $conn->real_escape_string($_GET['search']);
                // Modify SQL query to include search filter
                $sql .= " WHERE title LIKE '%$search%'";
            }
            
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Output data of each row
                while($row = $result->fetch_assoc()) {
                    echo '<div class="ebook">';
                    echo '<img src="' . $row["cover_image_path"] . '" width="50px">';
                    echo '<p>' . $row["title"] . '</p>';
                    echo '<p> author : ' . $row['author'] .'  </p>';
                    echo '<a href="' .$row["file_path"] .'" class="do-bt" download>download</a>';
                    echo'</div>';
                }
            } else {
                echo "0 results";
            }
            $conn->close();
        ?>
    </div>
    <footer class="footer">
    <div class="container text-center">
      <span class="text-muted"><a style="color: #00A1E1; " href="home1.html">Nmrec E-library</a>&copy;2024. All Rights Reserved.
</span>
    </div>
  </footer>

  <!-- Bootstrap JS (optional) -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>
