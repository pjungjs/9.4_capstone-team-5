\c ecoway_dev;

INSERT INTO users 
 (created_at, user_auth_id, first_name, last_name, username, email, short_bio, profile_picture_url, user_achvs)
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
  ('Recycle Hero', 'You got your first badge!', 'https://ecoway.s3.amazonaws.com/Badge.png', 10),
  ('Water Wizard', 'You have reduced your water consumption by 20%. Splish, splash, you are making a splash!','https://ecoway.s3.amazonaws.com/Badge.png', 20),
  ('Eco-Picasso', 'You have transformed recycled materials into 10 works of art. Your creations are eco-masterpieces!', 'https://ecoway.s3.amazonaws.com/Badge.png', 4),
  ('Carbon Footprint Fairy', 'You have calculated and reduced your carbon footprint by 25%. You are leaving smaller footsteps on Earth!', 'https://ecoway.s3.amazonaws.com/Badge.png', 50),
  ('Reusable Crusader', 'You have officially joined the ranks of the eco-warriors by consistently using reusable bags, bottles, and containers.', 'https://ecoway.s3.amazonaws.com/Badge.png', 9726),
  ('Consistent Player', 'You have logged to the app for 7 days in a row', 'https://ecoway.s3.amazonaws.com/Badge.png', 134),
  ('Everything local', 'You have supported eco-friendly stores with your bussiness', 'https://ecoway.s3.amazonaws.com/Badge.png', 134),
  ('Trash Tamer', 'Youve gone zero-waste for a month. Your trash can is on vacation!', 'https://ecoway.s3.amazonaws.com/Badge.png', 87),
  ('Bicycle Boss', 'You have biked 100 miles instead of driving. Your calves thank you, and so does the planet!', 'https://ecoway.s3.amazonaws.com/Badge.png', 20),
  ('Ocean Saver', 'You have picked up 100 pieces of trash at the beach. You are turning the tide on pollution!', 'https://ecoway.s3.amazonaws.com/Badge.png', 9726),
  ('Green Gremlin Guru', 'You have reduced energy consumption by 30%. You are the master of energy conservation!', 'https://ecoway.s3.amazonaws.com/Badge.png', 9726),
  ('Eco-Chef Connoisseur', 'You have cooked 30 plant-based meals. You are a culinary eco-genius!', 'https://ecoway.s3.amazonaws.com/Badge.png', 50),
  ('Eco-Adventurer', 'You have embarked on an eco-tour and explored nature responsibly. Adventure awaits, eco-traveler!', 'https://ecoway.s3.amazonaws.com/Badge.png', 50),
  ('Eco-Caravan Captain', 'You have organized a community clean-up event. You are the leader of the eco-pack!', 'https://ecoway.s3.amazonaws.com/Badge.png', 75),
  ('Eco-Fashionista', 'You have shopped only sustainable clothing brands for three months. You are strutting your eco-style!', 'https://ecoway.s3.amazonaws.com/Badge.png', 25),
  ('Eco Artisan', ' You have upcycled or repurposed 10 items. Your creativity knows no bounds!', 'https://ecoway.s3.amazonaws.com/Badge.png', 100),
  ('Veggie Voyager', 'You have had a plant-based diet for a month. Your taste buds have gone green!

', 'https://ecoway.s3.amazonaws.com/Badge.png', 150),
  ('Compost Crusader', 'You have mastered the art of composting. Your trash is treasure now!', 'https://ecoway.s3.amazonaws.com/Badge.png', 75),
  ('Solar Superstar', 'You have switched to solar power at home. Shine on, you radiant eco-hero!', 'https://ecoway.s3.amazonaws.com/Badge.png', 100),
   ('Eco-Bookworm', 'You have read 10 books on sustainability and eco-conscious living. Your mind is a garden of eco-ideas!', 'https://ecoway.s3.amazonaws.com/Badge.png', 100 );



  INSERT INTO questions 
  (created_at, question, question_type, is_signup)
  VALUES
  ('2023-09-08 15:00:00', 'Does your household use renewable energy?', 'energy', true),
  ('2023-09-08 15:00:00', 'What is the primary heating source in your household?', 'energy', true),
  ('2023-09-08 15:00:00', 'Do you use gas for cooking?', 'energy', true),
  ('2023-09-08 15:00:00', 'Do you have a car?', 'transportation', true),
  ('2023-09-08 15:00:00', 'How many minutes do you spend taking public transportation a day?', 'transportation', true),
  ('2023-09-08 15:00:00', 'How many large sized appliances have you purchased in the past year?', 'spending', true),
  ('2023-09-08 15:00:00', 'How many medium sized appliances have you purchased in the past year?', 'spending', true),
  ('2023-09-08 15:00:00', 'How many small sized appliances have you purchased in the past year?', 'spending', true),
  ('2023-09-08 15:00:00', 'How many pieces of clothing have you purchased this year?', 'spending', true),
  ('2023-09-08 15:00:00', 'What is your diet?', 'food', true);

INSERT INTO answers 
(created_at, user_auth_id, question_answers)
VALUES
('2023-09-08 15:00:00', 'auth_id_1', '[ { "Does your household use renewable energy?": "Yes", "What is the primary heating source in your household?": "Electricity" } ]'),
('2023-09-08 15:00:00', 'auth_id_2', '[ { "Does your household use renewable energy?": "No", "What is the primary heating source in your household?": "Natural Gas" } ]');

