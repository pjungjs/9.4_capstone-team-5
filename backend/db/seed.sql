\c ecoway_dev;

INSERT INTO users 
 (created_at, user_auth_id, first_name, last_name, username, email, short_bio, profile_picture_url, user_achvs)
VALUES
  ('2023-08-31T23:37:35.000Z', 'user-test-9db35542-5b23-4600-84e8-0c2c847ec98a', 'EcoWay', 'Pursuit', 'ecoway.dev5', 'ecoway.dev5@gmail.com', 'I am the Admin of this project :)', 'https://lh3.googleusercontent.com/a/ACg8ocK2bi7blV5RtmHuQEDJHAFmo8kGxmjUrH9B5y4Ty8As=s96-c', '[
    { "badge_id": "16", "badge_name": "Eco-chef Connoisseur", "badge_img_url": "https://ecoway.s3.amazonaws.com/eco+chef+connoiseur.png", "received_date": "2023-08-31T23:37:35.000Z" },
    { "badge_id": "1", "badge_name": "Consistent Player", "badge_img_url": "https://ecoway.s3.amazonaws.com/consistent+player.png",  "received_date": "2023-08-31T23:37:35.000Z" },
    { "badge_id": "4", "badge_name": "Recycle Crusader", "badge_img_url": "https://ecoway.s3.amazonaws.com/recycle+crusader.png",  "received_date": "2023-08-31T23:37:35.000Z" }
  ]'),


  ('2023-09-02T23:21:20.000Z', 'user-test-fc7a7585-6dc3-4acb-b49d-8fb6b103ceba', 'Jinseok', 'Jung', 'jj', 'pjungjs@gmail.com', 'Full Stack Web Developer', 'https://ca.slack-edge.com/TCVA3PF24-U041NJ82RM0-22a6eba57651-512', '[
    { "badge_name": "Consistent Player", "badge_img_url": "https://ecoway.s3.amazonaws.com/Badge.png",  "received_date": "2023-09-02T23:21:20.000Z" }
  ]'),



  ('2023-09-04T19:35:07.000Z', 'user-test-e832c79d-0c6d-499e-8cda-ef894bd7d25f', 'Wilghen', 'Santos', 'wilghensantos', 'wilghensantos@gmail.com', 'Passionate about Music, programming and life.', 'https://lh3.googleusercontent.com/a/ACg8ocJUOfy0bJBrPz2j33CbOWlrIJ2iMnbOzLOyGRR8EelM7n4=s96-', '[
    { "badge_id": "2", "badge_name": "Jukebox Hero", "badge_img_url": "https://ecoway.s3.amazonaws.com/jukebox+hero.png",  "received_date": "2023-08-31T23:37:35.000Z" }, { "badge_id": "11", "badge_name": "Eco-Picasso", "badge_img_url": "https://ecoway.s3.amazonaws.com/eco+picasso.png",  "received_date": "2023-08-31T23:37:35.000Z" },{ "badge_id":"7", "badge_name": "Energy-Efficient Enthusiast", "badge_img_url": "https://ecoway.s3.amazonaws.com/energy+efficient+enthusiast.png",  "received_date": "2023-08-31T23:37:35.000Z" }
  ]'),




  ('2023-09-06T22:29:59.000Z', 'user-test-0c35484e-1e63-4330-b327-039539cb2949', 'Jose', 'Cepeda', 'josecepeda', 'josecepeda@pursuit.org', 'Full Stack Web Developer', 'https://lh3.googleusercontent.com/a/ACg8ocIHEfs1bXismg-VnVSCEFr_mJtVuSCi3YhSLQuzf2_i=s96-c', '[]'),
  ('2023-09-10T17:40:36.000Z', 'user-test-439c2418-b901-4acd-b7ef-20a9b45fc6c3', 'She is the best', 'Epps', 'shareekaepps', 'shareekaepps@gmail.com', 'Full Stack Web Developer', 'https://lh3.googleusercontent.com/a/ACg8ocKAvDJej1E21YolQIyfadkqo5vddSF6sUn2oacrD17FDA=s96-c', '[
    { "badge_name": "Consistent Player", "badge_img_url": "https://ecoway.s3.amazonaws.com/Badge.png",  "received_date": "2023-08-31T23:37:35Z" }
  ]');

INSERT INTO user_scores 
 (user_auth_id, score_logged_in, score_energy, score_transportation, score_food, score_lifestyle, score_recycling, score_total)
VALUES
  ('user-test-9db35542-5b23-4600-84e8-0c2c847ec98a', 37, 700, 0, 300, 300, 0,1337),
  ('user-test-fc7a7585-6dc3-4acb-b49d-8fb6b103ceba', 0, 0, 1175,0, 0, 0,1175),
  ('user-test-e832c79d-0c6d-499e-8cda-ef894bd7d25f', 30, 700, 700, 0, 0, 0, 1430),
  ('user-test-0c35484e-1e63-4330-b327-039539cb2949', 60, 300, 300, 0, 0, 0,660),
  ('user-test-439c2418-b901-4acd-b7ef-20a9b45fc6c3', 30, 300, 300, 0, 700, 300,1630);


INSERT INTO badges 

 (badge_name, badge_description, badge_img_url, badge_req_points, badge_type)
VALUES 
  ('Consistent Player', 'You have logged to the app for 7 days in a row', 'https://ecoway.s3.amazonaws.com/consistent+player.png', 7, 'login'),
  ('Jukebox hero', 'You have logged to the app for 30 days in a row', 'https://ecoway.s3.amazonaws.com/jukebox+hero.png', 30, 'login'),
  ('Elite Player', 'You have logged to the app for 60 days in a row', 'https://ecoway.s3.amazonaws.com/elite+player.png', 60, 'login'),
  -- ('Next Level Standard', 'You have logged to the app for 90 days in a row', 'https://ecoway.s3.amazonaws.com/Badge.png', 90, 'login'),
  -- ('MVP', 'You have logged to the app for 180 days in a row', 'https://ecoway.s3.amazonaws.com/Badge.png', 180, 'login'),




  ('Recycle Crusader', 'Based on your daily efforts you have mastered the art of recycling, Keep it up! ', 'https://ecoway.s3.amazonaws.com/Reusable+Crusader.png', 300, 'recycling'),
  ('Recycle Artisan', 'As if we were not blown by your recycling habits, you have recycled enough to keep 10 miles of beach pristine, awesome', 'https://ecoway.s3.amazonaws.com/Recycling+Artisan.png', 400, 'recycling'),
  ('Reusable Crusader', 'You have officially joined the ranks of the eco-warriors by consistently using reusable bags, bottles, and containers.', 'https://ecoway.s3.amazonaws.com/recycle+crusader.png', 475, 'recycling'),
  -- ('Recycle Hero', 'You may not wear a cape, but your recycling efforts are saving the planet for everyone', 'https://ecoway.s3.amazonaws.com/Badge.png', 550, 'recycling'),
  -- ('Ocean Saver', 'You have recycled the equivalent of 1000 pieces of trash at the beach. You are turning the tide on pollution!', 'https://ecoway.s3.amazonaws.com/Badge.png', 650,'recycling'),
  -- ('Recycling Jedi', 'Your recycling efforts have diverted thousands of pounds of waste from landfills, reducing your carbon footprint and preserving our planet for future generations, stay green!', 'https://ecoway.s3.amazonaws.com/Badge.png', 800, 'recycling'),



  ('Energy-Efficiency Enthusiast', 'You have replaced all your traditional light bulbs with energy-efficient LEDs. Your home is lit with eco-friendly brilliance!', 'https://ecoway.s3.amazonaws.com/energy+efficient+enthusiast.png', 300, 'energy' ),
  ('Carbon Footprint Wizard', 'Your energy-saving habits have reduced your carbon footprint, conserved precious resources equivalent to keep a small village sustainable, and shown others the power of green living.', 'https://ecoway.s3.amazonaws.com/carbon+footprint+wizard.png', 400, 'energy'),
  ('Green Guru', 'You have reached a milestone in energy efficiency, power dynamo! Your commitment is like turning off 500 light bulbs for an entire year. Keep shining bright!', 'https://ecoway.s3.amazonaws.com/green+guru.png', 475,'energy'),
  -- ('Superstar Energy', 'You are an energy-saving legend, Energy Guru! Your efforts are like taking 50 cars off the road for a year. Keep steering us toward a greener future', 'https://ecoway.s3.amazonaws.com/Badge.png', 650, 'energy'),
  -- ('Energy Dynamo', 'You have reached the summit of energy efficiency in our EcoWay community. Your commitment to conserving energy is not only helping lower your bills but is also lighting the way for a greener, more sustainable future.', 'https://ecoway.s3.amazonaws.com/Badge.png', 800, 'energy'),



  ('Green Master', 'Lifestyle Luminary! Your eco-conscious choices are like a beacon of sustainability. You have made a positive impact equivalent to planting 20 trees. Keep living the green life!', 'https://ecoway.s3.amazonaws.com/green+Master.png', 300, 'lifestyle' ),
  ('Eco-Picasso', 'You have transformed into 10 works of art the equivalent of 20 pounds of recycled materials. Your creations are eco-masterpieces!', 'https://ecoway.s3.amazonaws.com/eco+picasso.png', 400, 'lifestyle'),
  ('Eco-Bookworm', 'Your consitent habits shows your knowledge about gree living. Have you been in the library lately ? is like you have read 10 books on sustainability and eco-conscious living. Your mind is a garden of eco-ideas!', 'https://ecoway.s3.amazonaws.com/eco+worm+book.png', 475, 'lifestyle' ),
  -- ('Eco-Fashionista', 'Fashion-forward Eco-Champion! Your sustainable style is like a breath of fresh air. You have reduced carbon emissions equivalent to a cross-country road trip. Keep strutting your eco-style!!', 'https://ecoway.s3.amazonaws.com/Badge.png', 650,'lifestyle'),
  -- ('Eco-Activist Advocate', 'Eco-Activist Hero! Your dedication to environmental advocacy is like rallying an army for the planet. Your efforts are equivalent to planting 1,000 trees! Keep raising your voice!', 'https://ecoway.s3.amazonaws.com/Badge.png', 800, 'lifestyle' ),



  ('Bicycle Boss', 'Pedal Powerhouse! You have earned the Bicycle Boss badge. Your 100 miles on two wheels are like planting 10 trees along the bike path. Keep riding toward a greener tomorrow!', 'https://ecoway.s3.amazonaws.com/Bicycle+Boss.png', 300, 'transportation'),
  ('Eco-Adventurer', 'Congratulations, Eco-Adventurer! Your sustainable travels have a carbon footprint lower than a trek through the wilderness. Keep exploring responsibly!', 'https://ecoway.s3.amazonaws.com/eco+adventurer.png',400 ,'transportation'),
  ('Public transit trailblazer', 'Your commitment to public transportation has made city streets cleaner and traffic lighter. You are a pioneer of urban eco-commuting.', 'https://ecoway.s3.amazonaws.com/public+transportation+trailblazer.png', 475, 'transportation'),
  -- ('Green Commuter', 'Congratulations, Green Commuter! You have move your way to environmental greatness, reducing emissions like taking 1,000 cars off the road. Keep riding the eco-wave!', 'https://ecoway.s3.amazonaws.com/Badge.png', 650, 'transportation'),
  -- ('Green Mobility Maestro', 'You have embraced the eco-friendly transportation level with zeal, reducing your carbon tire print and steering toward a greener future', 'https://ecoway.s3.amazonaws.com/Badge.png', 800, 'transportation'),



  ('Eco-Chef Connoisseur', 'You have cooked 30 plant-based meals. You are a culinary eco-genius!', 'https://ecoway.s3.amazonaws.com/eco+chef+connoiseur.png', 300, 'food'),
  ('Zero Waste Foodie', 'You have taken zero-waste cooking to a whole new level. As a Zero-Waste Epicurean, your kitchen is a sustainability paradise! Your culinary efforts are equivalent to removing 500 pounds of CO2 from the atmosphere!', 'https://ecoway.s3.amazonaws.com/zero+waste+foodie.png', 400, 'food'),
  ('Sustainable Sustainer', 'Your commitment to sustainable eating makes you a Sustainable Sustainer. Your food choices are as green as can be!  Your eco-conscious diet is equivalent to saving 100,000 gallons of water', 'https://ecoway.s3.amazonaws.com/sustainable+sustainer.png', 475, 'food' );
  -- ('Green Gourmet Guru', 'Keep savoring those eco-friendly flavors! Your food choices are equivalent to planting 250 trees, keep it green all the way!', 'https://ecoway.s3.amazonaws.com/Badge.png', 650, 'food' ),
  -- ('Organic Olympian', 'You have embraced the organic lifestyle, and your food choices reflect your dedication. As an Organic Olympian, you are championing health and sustainability. Your organic journey is equivalent to reducing plastic waste by 1,000 bottles','https://ecoway.s3.amazonaws.com/Badge.png', 800, 'food');





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

  (created_at, user_auth_id, question_answers, carbon_emission_result)
VALUES
  ('2023-09-08 15:00:00', 'user-test-9db35542-5b23-4600-84e8-0c2c847ec98a', '[ { "Does your household use renewable energy?": "Yes", "What is the primary heating source in your household?": "Electricity" } ]',0),
  ('2023-09-08 15:00:00', 'user-test-fc7a7585-6dc3-4acb-b49d-8fb6b103ceba', '[ { "Does your household use renewable energy?": "No", "What is the primary heating source in your household?": "Natural Gas" } ]',0);


INSERT INTO posts 
  (created_at, user_auth_id, title, content, post_likes)
VALUES
  ('2023-09-08T12:30:00Z','auth_id_6', 'Sample Post 1', 'This is the content of the first post', '[{"user_id": "user_auth_id_5", "liked_at": "2023-09-10T12:00:00Z"}]'),
  ('2023-09-08T10:00:00Z','auth_id_7', 'Sample Post 2', 'This is the content of the second post', '[{"user_id": "user_auth_id_6", "liked_at": "2023-09-10T13:00:00Z"}]'),
  ('2023-09-08T13:30:00Z','auth_id_8', 'Sample Post 3', 'This is the content of the third post', '[{"user_id": "user_auth_id_7", "liked_at": "2023-09-10T14:00:00Z"}]'),
  ('2023-09-08T14:00:00Z','auth_id_9', 'Sample Post 4', 'This is the content of the fourth post', '[{"user_id": "user_auth_id_8", "liked_at": "2023-09-10T15:00:00Z"}]');


INSERT INTO post_comments
  (created_at, user_auth_id, post_id, content)
VALUES
  ('2023-09-12T10:00:00Z', 'auth_id_1', 1, 'Great topic! I totally agree with your points.'),
  ('2023-09-13T13:00:00Z', 'auth_id_2', 1, 'I have a different perspective on this. Let me explain...'),
  ('2023-09-10T14:00:00Z', 'auth_id_3', 2, 'Thanks for sharing this information. It is very informative.'),
  ('2023-09-11T16:00:00Z', 'auth_id_4', 3, 'I had a similar experience, and I can relate to your story.');
