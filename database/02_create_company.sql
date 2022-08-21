CREATE TABLE `company` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `company_name` varchar(255),
  `country` varchar(255),
  `region` varchar(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP 
);