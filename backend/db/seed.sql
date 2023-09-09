\c ecoway_dev;

INSERT INTO users
  (created_at, user_auth_id, first_name, last_name, username, email, bio, profile_picture_url, user_achvs)
VALUES
  ('2023-09-08T12:00:00Z', 'auth_id_1', 'John', 'Doe', 'johndoe', 'johndoe@example.com', 'I love coding!', 'https://example.com/johndoe.jpg', '[
    { "badge_name": "Recycle Hero", "received_date": "2023-08-31T23:37:35Z" },
    { "badge_name": "Feedback contributor", "received_date": "2023-09-01T23:37:35Z" },
    { "badge_name": "Energy Saver", "received_date": "2023-09-02T23:37:35Z" }
  ]'),
  ('2023-09-08T12:30:00Z', 'auth_id_2', 'Jane', 'Smith', 'janesmith', 'janesmith@example.com', 'Travel enthusiast.', 'https://example.com/janesmith.jpg', '[]'),
  ('2023-09-08T13:00:00Z', 'auth_id_3', 'Michael', 'Johnson', 'michaelj', 'michaelj@example.com', 'Passionate about sports.', 'https://example.com/michaelj.jpg', '[]'),
  ('2023-09-08T13:30:00Z', 'auth_id_4', 'Emily', 'Brown', 'emilyb', 'emilyb@example.com', 'Foodie and chef.', 'https://example.com/emilyb.jpg', '[]'),
  ('2023-09-08T14:00:00Z', 'auth_id_5', 'David', 'Wilson', 'davidw', 'davidw@example.com', 'Nature lover.', 'https://example.com/davidw.jpg', '[
    { "badge_name": "Consistent Player", "received_date": "2023-08-31T23:37:35Z" }
  ]');

INSERT INTO user_scores
  (user_auth_id, score_carbon_result, score_logged_in, score_answered, score_recycled, score_leaderboard, score_active_community)
VALUES
  ('auth_id_1', 100, 30, 45, 50, 75, 90),
  ('auth_id_2', 20, 20, 20, 20, 20, 20),
  ('auth_id_3', 30, 50, 30, 30, 0, 0),
  ('auth_id_4', 10, 10, 10, 10, 0, 0);

INSERT INTO badges
  (badge_name, badge_description, image, badge_points)
VALUES 
  ('Recycle Hero', 'You got your first badge!', 'https://png.pngtree.com/element_pic/00/16/07/18578cd65e6ecaa.jpg', 10),
  ('Next Level', 'this is a second badge','https://images.vexels.com/media/users/3/245747/isolated/preview/fc5e5179e126bb8b8878c65ed0639179-great-job-badge.png', 11),
  ('Feedback contributor', 'this is the third badge', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/2424px-Seal_of_the_President_of_the_United_States.svg.png', 4),
  ('Energy Saver', 'this is the third badge', 'https://icon2.cleanpng.com/20180320/qoe/kisspng-computer-icons-iconfinder-award-top-seller-icon-png-5ab0932f750863.9298772115215214554794.jpg', 134),
  ('Reusable Crusader', 'this is the third badge', 'backend/db/assets/6.png', 9726),
  ('Consistent Player', 'this is the hsii badge', 'backend/db/assets/6.png', 134),
  ('Everything local', 'this is the third badge', 'backend/db/assets/7.png', 134),
  ('8 Badge', 'this is the third badge', 'backend/db/assets/8.png', 87),
  ('9 Badge', 'this is the blah blah badge', 'backend/db/assets/9.png', 134),
  ('X Badge', 'this is the third badge', 'backend/db/assets/10.png', 9726),
  ('11 Badge', 'this is the third badge', 'backend/db/assets/11.png', 9726);
