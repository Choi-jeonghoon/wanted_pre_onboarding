CREATE TABLE `apply` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `post_id` int,
  `user_id` int,
   FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE,
 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);