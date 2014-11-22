CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  text VARCHAR(140),
  username VARCHAR(12),
  roomId INT(200)
);

CREATE TABLE rooms (
  roomId INT(200) AUTO_INCREMENT,
  roomname VARCHAR(12),
  PRIMARY KEY (roomId)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

