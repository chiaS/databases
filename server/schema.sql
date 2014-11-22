/*CREATE DATABASE chat;*/

USE chat;

CREATE TABLE messages (
  text VARCHAR(140),
  userId INT(100),
  roomId INT(200)
);

CREATE TABLE rooms (
  roomId INT(200) AUTO_INCREMENT,
  roomname VARCHAR(12),
  PRIMARY KEY (roomId)
);

CREATE TABLE users (
  userId INT(100) AUTO_INCREMENT,
  username VARCHAR(12),
  PRIMARY KEY (userId)
);

CREATE TABLE room_user_rel (
  userId INT(100),
  roomId INT(200)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

