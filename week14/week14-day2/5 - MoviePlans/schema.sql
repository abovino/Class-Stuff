CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(50) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO movies (movie) VALUES ("Secret Life of Pets");
INSERT INTO movies (movie) VALUES ("Jason Bourne");
INSERT INTO movies (movie) VALUES ("28 Days Later");
INSERT INTO movies (movie) VALUES ("Zer0 Days");
INSERT INTO movies (movie) VALUES ("Top Gun");

SELECT * FROM movies;