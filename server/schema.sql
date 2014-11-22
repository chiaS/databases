CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  text VARCHAR(140),
  userId INT(100),
  roomId INT(200)
);

CREATE TABLE rooms (
  roomId INT(200),
  roomname VARCHAR(12)
);

CREATE TABLE users (
  userId INT(100),
  username VARCHAR(12)
);

CREATE TABLE room_user_rel (
  userId INT(100),
  roomId INT(200)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

