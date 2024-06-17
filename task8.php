<!DOCTYPE html>
<html>
<head>
  <title>E-Books</title>
  <style>
    /* Add some CSS styles to make the page look better */
    body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  margin-top: 50px;
}

form {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

input[type=text] {
  width: 50%;
  padding: 10px;
  font-size: 16px;
}

button[type=submit] {
  width: 20%;
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 30px;
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #f9f9f9;
}

h2 {
  margin-top: 0;
}

p {
  margin-top: 0;
}

a {
  display: block;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  color: #4CAF50;
}

a:hover {
  color: #45a049;
}
  </style>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ebooks";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM books";
$result = $conn->query($sql);
?>
  <h1>E-Books</h1>
  <form action="" method="get">
    <input type="text" name="search" placeholder="Search...">
    <button type="submit">Search</button>
  </form>
  <ul>
    <?php
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        echo "<li>";
        echo "<h2>" . $row["title"] . "</h2>";
        echo "<p>" . $row["author"] . "</p>";
        echo "<p>" . $row["description"] . "</p>";
        echo "<a href='" . $row["file"] . "' download>" . $row["file"] . "</a>";
        echo "</li>";
      }
    } else {
      echo "<li>No results found.</li>";
    }
    $conn->close();
    ?>
  </ul>
</body>
</html>
