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
Title varchar(100) NOT NULL,
AudioFile varchar(150) NOT NULL,
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
VALUES ('Daniel', 'McCracken', '7ebed7@gmail.com', 0226188948, 'allmine'), ('Jordan', 'McCracken', 'something@gmail.com', 495673064, 'password');


INSERT INTO Song(Title,AudioFile,Author,Genre)
VALUES ('Two Steps From Hell - Star Sky', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Two+Steps+From+Hell+-+Star+Sky.mp3', 'Thomas J. Bergersen', 'Film Scores'),
('Faded', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Alan+Walker+-+Faded.mp3', 'Alan Walker', 'Electronic'),
('Eurodancer', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Mangoo+-+Eurodancer.mp3', 'Mangoo', 'Electronic'),
('Fear Not this Night', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Fear+not+this+night++Cover.mp3', 'Jeremy Soule', 'Classical'),
('Nightcore - Canon in D & River Flows in You', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Canon+in+D+-+River+Flows+in+You+~Nightcore+Ver.~.mp3', 'AkihiroKun Nightcore Music', 'Classical'),
('Duel Of The Fates (From Star Wars) Violin Cover', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Duel+Of+The+Fates+(From+Star+Wars)+Violin+Cover++-+Taylor+Davis.mp3', 'Taylor DavisS', 'Film Scores'),
('Greensleeves - feat. ', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Greensleeves+-+feat.+Tim+Foust.mp3', 'Peter Hoolands & Tim Foust', 'Classical'),
('Only Hope(A Walk to Remember)', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Only+Hope+-+Mandy+Moore+%5BA+Walk+to+Remember+-+with+Lyrics%5D.mp3', 'Mandy Moore', 'Film Scores'),
("He's a Pirate (Disney's Pirates of the Caribbean Theme) Violin Cover", "https://tunique.s3-ap-southeast-2.amazonaws.com/He's+a+Pirate+(Disney's+Pirates+of+the+Caribbean+Theme)+Violin+Cover+-+Taylor+Davis.mp3", 'Taylor Davis', 'Film Scores'),
('Star Wars - Fantasy Suite, Movement #2', 'https://tunique.s3-ap-southeast-2.amazonaws.com/Star+Wars+-+Fantasy+Suite%2C+Movement+%232+-+Jarrod+Radnich+Virtuosic+Piano+Solo+4K.mp3', 'Jarrod Radnich', 'Film Scores');




