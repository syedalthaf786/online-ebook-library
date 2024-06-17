<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "ebooks");

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $title = $_POST["title"];
  $author = $_POST["author"];
  $description = $_POST["description"];
  $book_file = $_FILES["file"]["name"];
  $book_tmp_name = $_FILES["file"]["tmp_name"];
  $book_type = $_FILES["file"]["type"];
  $book_size = $_FILES["file"]["size"];

  // Upload the cover image
  $cover_name = $_FILES["cover_image"]["name"];
  $cover_tmp_name = $_FILES["cover_image"]["tmp_name"];
  $cover_type = $_FILES["cover_image"]["type"];
  $cover_size = $_FILES["cover_image"]["size"];

  // Move the cover image to the uploads directory
  $upload_dir = "uploads/";
  $book_path=$upload_dir . $book_file;
  $cover_path = $upload_dir . $cover_name;
  move_uploaded_file($cover_tmp_name, $cover_path);
  move_uploaded_file($book_tmp_name, $book_path);


  // Insert the book details and cover image path into the database
  $sql = "INSERT INTO bood_upload (title, author, description,file_path,cover_image_path) VALUES (?, ?, ?,?, ?)";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, "sssss", $title, $author, $description,$book_path, $cover_path);
  mysqli_stmt_execute($stmt);

  // Redirect to the book list page
  header("Location:admin.html");
}

// Close the database connection
mysqli_close($conn);
?>
