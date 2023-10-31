<?php

include "database.php";
$database = new Database();
$db = $database->getConnection();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize the input data
    $pass = $_POST["password"];
    $pass2 = $_POST["password2"];

    if ($pass !== $pass2) {
        echo "Passwords do not match 🙃";
        die();
    }

    $first_name = htmlspecialchars(strip_tags($_POST["first_name"]));
    $last_name = htmlspecialchars(strip_tags($_POST["last_name"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password for security
    $gender = $_POST["Gender"];
    $division = $_POST["division"];

    // Check if the user already exists based on their email
    $query = "SELECT email FROM users WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() == 0) {
        // User doesn't exist, so we can insert the data
        $query = "INSERT INTO Users (first_name, last_name, email, Password, gender, division) VALUES (:first_name, :last_name, :email, :password, :gender, :division)";
        $stmt = $db->prepare($query);
        $stmt->bindParam(':first_name', $first_name);
        $stmt->bindParam(':last_name', $last_name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':division', $division);

        if ($stmt->execute()) {
            // Data inserted successfully
            echo "User registration successful! 😁";

            echo '<script>
            setTimeout(function() {
                window.location.href = "https://localhost/Gariwala/";
            }, 1500); 
          </script>';
        } else {
            // Error occurred while inserting data
            echo "User registration failed. Please try again later.";

        }
    } else {
        // User with the same email already exists
        echo "User with this email already exists. Please use a different email.";
    }
    // header("Location: confirmation_page.php");
}