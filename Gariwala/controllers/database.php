<?php

class Database {
    private $host = "localhost"; // Database host
    private $db_name = "gariwala"; // Your database name
    private $username = "root"; // Database username
    private $password = ""; // Database password

    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
        
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }

    
}

//$database = new Database();

// Get the database connection
//$db = $database->getConnection();
