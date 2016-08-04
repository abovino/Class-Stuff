CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
    coolness_points INTEGER(10) NOT NULL,
    attitude VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

USE seinfeld_db;

INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 10, "Open Racist");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 10, "Went to my High School");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Newman", 10, "Annoying");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 10, "Funny");

SELECT * FROM actors;