USE animals_db;

INSERT INTO people (name, has_pet, pet_name, pet_age) VALUES ("Angelo", TRUE, "Benito", 2);

SELECT * FROM people;

UPDATE people SET has_pet=TRUE, pet_name="Frankling", pet_age=2 WHERE id=2;

SELECT * FROM people;