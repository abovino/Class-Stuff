CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    languages VARCHAR(30) NOT NULL,
    rating INTEGER(10) NOT NULL,
    mastered BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);

INSERT INTO programming_languages (languages, rating) VALUES ("Javascript", 10);
INSERT INTO programming_languages (languages, rating) VALUES ("Python", 9);
INSERT INTO programming_languages (languages, rating) VALUES ("SQL", 1);
INSERT INTO programming_languages (languages, rating) VALUES ("Java", 7);

SELECT * FROM programming_languages;