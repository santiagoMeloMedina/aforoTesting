
DROP DATABASE IF EXISTS aforo;
CREATE DATABASE IF NOT EXISTS aforo;
USE aforo;

CREATE TABLE IF NOT EXISTS User(
    username VARCHAR(255) PRIMARY KEY,
    pssword VARCHAR(255) NOT NULL,
    city VARCHAR(15) NOT NULL,
    neighborhood VARCHAR(30) NOT NULL

);

CREATE TABLE IF NOT EXISTS Citizen(
    username VARCHAR(255) PRIMARY KEY,
    names varchar(255) NOT NULL,
    lastnames varchar(255) NOT NULL,
    age INT NOT NULL,
    occupation varchar(255) NOT NULL,
    housemates INT NOT NULL,
    FOREIGN KEY(username) REFERENCES User(username)
);

CREATE TABLE IF NOT EXISTS Category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL 
);

CREATE TABLE IF NOT EXISTS PublicEstablishment(
    username VARCHAR(255) PRIMARY KEY,
    name varchar(255) NOT NULL,
    category INT NOT NULL,
    capacity INT NOT NULL,
    actual INT NOT NULL DEFAULT 0,
    FOREIGN KEY(username) REFERENCES User(username),
    FOREIGN KEY(category) REFERENCES Category(id)
);

CREATE TABLE IF NOT EXISTS Entries(
    id INT AUTO_INCREMENT PRIMARY KEY,
    inDate TIMESTAMP NOT NULL DEFAULT NOW(),
    outDate TIMESTAMP NULL,
    citizenUsername varchar(255) NOT NULL,
    publicEstUsername varchar(255) NOT NUll,
    temperature FLOAT(4,2) NOT NULL,
    mask BOOLEAN NOT NULL,
    FOREIGN KEY (citizenUsername) REFERENCES Citizen(username),
    FOREIGN KEY (publicEstUsername) REFERENCES PublicEstablishment(username)   

);

CREATE TABLE IF NOT EXISTS Parameters(
    id INT AUTO_INCREMENT PRIMARY KEY,
    tpe VARCHAR(255) NOT NULL,
    val VARCHAR(255) NOT NULL,
    percent FLOAT(4,2) NOT NULL
);