USE animals_db;
DROP TABLE people;

CREATE TABLE people (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age INTEGER(10),
    PRIMARY KEY (id)
);

INSERT INTO people (name,has_pet,pet_name,pet_age) VALUES ("Ahmed", TRUE, "Rockington",100);
SELECT * FROM people;