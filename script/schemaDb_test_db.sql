--
-- Database: `test_db`
--

CREATE DATABASE IF NOT EXISTS `test_db`;
USE `test_db`;


-- ENTITIES

--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`password` varchar(40)  NOT NULL,
	`username` varchar(40)  NOT NULL UNIQUE,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

INSERT INTO `test_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '1a1dc91c907325c69271ddf0c944bc72', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `test_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);






