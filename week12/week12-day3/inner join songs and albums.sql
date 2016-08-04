USE topsongs_db;

SElECT songs.song, albums.album 
FROM songs AS songs
INNER JOIN topalbums AS albums
ON songs.year = albums.year
AND songs.artist = albums.artist;

SELECT * FROM table1 LEFT JOIN table2 on table1.id = table2.id