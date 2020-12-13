DROP DATABASE IF EXISTS mydb;
CREATE DATABASE mydb;
USE mydb;
 
CREATE TABLE users (
    Email VARCHAR(50)  PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    AccountId int NOT NULL UNIQUE
);

CREATE TABLE news (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(50) NOT NULL,
    Body TEXT NOT NULL,
    DateTime DATETIME NOT NULL
);


INSERT INTO users VALUES ('user1@email.com', 'user1', '1234', 1);
INSERT INTO users VALUES ('user2@email.com', 'user2', '3456', 2);
INSERT INTO users VALUES ('user3@email.com', 'user3', '7890', 3);
INSERT INTO users VALUES ('user4@email.com', 'user4', '4321', 4);


INSERT INTO news VALUES (1, 'This is new 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', NOW());
INSERT INTO news VALUES (2, 'This is new 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', NOW());
INSERT INTO news VALUES (3, 'This is new 3', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', NOW());