CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
	wish VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

USE wishes_db;

INSERT INTO wishes (wish) VALUES ("I wish I was a better coder");
INSERT INTO wishes (wish) VALUES ("I wish my dog would not bite my ears when I'm sleeping");
INSERT INTO wishes (wish) VALUES ("I wish I had a standing desk");
INSERT INTO wishes (wish) VALUES ("I wish there was more hours in the day");

SELECT * FROM wishes;