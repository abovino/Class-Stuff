USE favorite_db;

INSERT INTO favorite_foods (food, score) VALUES ("Chipotle", 10);
INSERT INTO favorite_foods (food, score) VALUES ("Peanut Butter and Jelly", 8);
INSERT INTO favorite_foods (food, score) VALUES ("Steak", 7);

INSERT INTO favorite_movies (movie, five_times, score) VALUES ("Star Wars", false, 2);
INSERT INTO favorite_movies (movie, five_times, score) VALUES ("Platoon", false, 8);
INSERT INTO favorite_movies (movie, five_times, score) VALUES ("Forrest Gump", false, 8);

INSERT INTO favorite_songs (song, artist, score) VALUES ("Deadbolt", "Thrice", 10);
INSERT INTO favorite_songs (song, artist, score) VALUES ("2nd sucks", "A Day To Remember", 10);
INSERT INTO favorite_songs (song, artist, score) VALUES ("Aurora", "Ilane Bluestone", 10);

SELECT * FROM favorite_foods;
SELECT * FROM favorite_movies;
SELECT * FROM favorite_songs;

INSERT INTO favorite_songs (song, artist, score) VALUES ("Spheres", "Ilan Bluestone", 10), ("Big Ben", "Ilan Bluestone", 10);

