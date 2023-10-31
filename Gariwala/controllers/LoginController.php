<?php

include "database.php";
$database = new Database();
$db = $database->getConnection();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];

    $query = "SELECT * FROM users WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verify the password
        if (password_verify($password, $user['Password'])) {
            // Password is correct, user is logged in
          
            $_SESSION['user_id'] = $user['id'];

            // Redirect the user to a logged-in page
            header("Location: https://localhost/Gariwala/");
        } else {
            // Password is incorrect
            echo "Invalid password. Please try again. 🙃";
        }
    } else {
        // User with the provided email does not exist
        echo "User not found. Please register or check your credentials. 🙃";
    }
}
?>
