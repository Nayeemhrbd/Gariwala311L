CREATE TABLE `users` (
  `id` INT UNSIGNED AUTO_INCREMENT NOT NULL,
  `first_name` VARCHAR(20) NOT NULL,
  `last_name` VARCHAR(20) NOT NULL,
  `email` VARCHAR(20) NOT NULL,
  `division` VARCHAR(20) NOT NULL,
   `gender` VARCHAR(10) NOT NULL,
  `Password` VARCHAR(255) NOT NULL, -- Adjust the data type and length as needed
  PRIMARY KEY (`id`) -- Define a primary key for the table
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
