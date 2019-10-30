USE artofthetune;

DROP TABLE IF EXISTS Support;
DROP TABLE IF EXISTS Account;
DROP TABLE IF EXISTS Song;

CREATE TABLE Account (
email varchar(100) UNIQUE NOT NULL,
firstName varchar(50) NOT NULL,
lastName varchar(50) NOT NULL,
phone varchar(25) NOT NULL,
password varchar(25) NOT NULL,
PRIMARY KEY (email));

CREATE TABLE Song (
SongID int AUTO_INCREMENT,
Title varchar(50) NOT NULL,
Length TIME NOT NULL,
Author varchar(100) NOT NULL,
Genre varchar(25) NOT NULL,
PRIMARY KEY (SongID));

CREATE TABLE Support (
ticketID int AUTO_INCREMENT,
firstName varchar(50) NOT NULL,
lastName varchar(50) NOT NULL,
message varchar(500),
email varchar(100) NOT NULL,
PRIMARY KEY (TicketID),
FOREIGN KEY (email) REFERENCES Account(email) ON UPDATE CASCADE);


INSERT INTO Account(firstName,lastName,email,phone,password)
VALUES ('Daniel', 'McCracken', '7ebed7@gmail.com', 0226188948, 'allmine'), ('Jordan', 'McCracken', 'something@gmail.com', 495673064, 'erkjthe');


INSERT INTO Song(Title,Length,Author,Genre)
VALUES ('Song1', '00:03:21', 'Daniel', 'classical'),('Song2', '00:06:33', 'Calida', 'jazz'),
('Song3', '00:04:13', 'Tom', 'blues'),('Song4', '00:16:35', 'Arine', 'reggae'),
('Song5', '00:23:16', 'Sedie', 'classical'),('Song6', '00:45:56', 'Matthew', 'pop'),
('Song7', '00:01:33', 'Greg', 'rock'),('Song8', '00:57:01', 'Suzzanne', 'hip hop');



