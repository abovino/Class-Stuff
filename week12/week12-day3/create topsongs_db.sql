USE topsongs_db;

CREATE TABLE topalbums (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

select * from topalbums;