<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "TTJ";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn) {
    die("Ошибка подключения: " . mysqli_connect_error());
}
// Получение данных из POST запроса
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$books = $_POST['books']; // Массив книг, заказанных пользователем

// Создание нового заказа в таблице Orders
$sql = "INSERT INTO Orders (User, UserEmail, UserNumber) VALUES ('$name', '$email', '$phone')";
if ($conn->query($sql) === TRUE) {
  $orderId = $conn->insert_id; // Получение ID только что созданного заказа
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Добавление информации о книгах в таблицу bookOrder
foreach($books as $bookId) {
  $sql = "INSERT INTO bookOrder (bookId, orderId) VALUES ('$bookId', '$orderId')";
  if ($conn->query($sql) !== TRUE) {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();

?>