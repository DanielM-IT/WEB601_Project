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
VALUES ('Drums', '00:03:21', 'Daniel', 'classical'), ('Piano', '00:06:33', 'Calida', 'classical');





