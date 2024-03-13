CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  `active` tinyint NOT NULL,
  `admin` tinyint NOT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `user_setting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `general` tinyint NOT NULL,
  `academic` tinyint NOT NULL,
  `scholarship` tinyint NOT NULL,
  `entrepreneurship` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `user` (`id`)
)