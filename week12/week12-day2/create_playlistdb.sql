CREATE DATABASE playlistdb;

USE playlistdb;

CREATE TABLE playlist (
	ID INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    artist VARCHAR(30) NOT NULL,
    genre VARCHAR(30) NOT NULL,
    PRIMARY KEY(ID)
);

INSERT INTO playlist (title, artist, genre) VALUE ("Deadbolt", "Thrice", "Alternative Rock");
INSERT INTO playlist (title, artist, genre) VALUE ("The Artist in the Ambulance", "Thrice", "Alternative Rock");
INSERT INTO playlist (title, artist, genre) VALUE ("2nd Sucks", "A Day to Remember", "Alternative Rock");
INSERT INTO playlist (title, artist, genre) VALUE ("Spheres", "Ilan Bluestone", "EDM");
INSERT INTO playlist (title, artist, genre) VALUE ("Aurora", "Ilan Bluestone", "EDM");
INSERT INTO playlist (title, artist, genre) VALUE ("m.A.A.d City", "Kendrick Lamar", "Hip Hop");

SELECT * FROM playlist;