CREATE DATABASE euro_football_teams;

use euro_football_teams;

CREATE TABLE serie_a (
	team_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    team  VARCHAR(30) NOT NULL,
    league_position INTEGER(3) NOT NULL,
    points INTEGER(4) NOT NULL,
    PRIMARY KEY(team_id)
);



use euro_football_teams;

INSERT INTO serie_a (team, league_position, points) VALUES ("Juventus", 1, 91);
INSERT INTO serie_a (team, league_position, points) VALUES ("Napoli", 2, 82);
INSERT INTO serie_a (team, league_position, points) VALUES ("AS Roma", 3, 80);
INSERT INTO serie_a (team, league_position, points) VALUES ("Internazionale", 4, 67);
INSERT INTO serie_a (team, league_position, points) VALUES ("Fiorentina", 5, 64);
INSERT INTO serie_a (team, league_position, points) VALUES ("Sassuolo", 6, 61);
INSERT INTO serie_a (team, league_position, points) VALUES ("AC Milan", 7, 57);
INSERT INTO serie_a (team, league_position, points) VALUES ("Lazio", 8, 54);
INSERT INTO serie_a (team, league_position, points) VALUES ("Chievo Verona", 9, 50);
INSERT INTO serie_a (team, league_position, points) VALUES ("Empoli", 10, 46);
INSERT INTO serie_a (team, league_position, points) VALUES ("Genoa", 11, 46);
INSERT INTO serie_a (team, league_position, points) VALUES ("Torino", 12, 45);
INSERT INTO serie_a (team, league_position, points) VALUES ("Atalanta", 13, 45);
INSERT INTO serie_a (team, league_position, points) VALUES ("Bologna", 14, 42);

select * from serie_a;