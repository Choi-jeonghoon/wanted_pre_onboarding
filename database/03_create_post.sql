CREATE TABLE `post` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `company_id` int,
  `employ_position` varchar(255),
  `recruitment_compensation` varchar(255),
  `contents` varchar(255),
  `technology_stack` varchar(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (company_id) REFERENCES company (id) ON DELETE CASCADE
);

