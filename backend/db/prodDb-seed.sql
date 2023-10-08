-- Drop tables if they exist
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS user_scores CASCADE;
DROP TABLE IF EXISTS badges CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS post_comments CASCADE;

-- Create tables
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    created_at TEXT,
    user_auth_id TEXT UNIQUE,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    email TEXT,
    short_bio TEXT,
    profile_picture_url TEXT,
    user_achvs JSONB DEFAULT '[]'::jsonb,
    user_actns JSONB DEFAULT '[]'::jsonb
);

CREATE TABLE IF NOT EXISTS user_scores (
    user_auth_id TEXT PRIMARY KEY REFERENCES users (user_auth_id) ON DELETE CASCADE,
    score_logged_in INTEGER DEFAULT 0, -- related to the daily user login counts
    score_energy INTEGER DEFAULT 0, -- related to the energy category from the questionnaire
    score_transportation INTEGER DEFAULT 0, -- related to the transportation category from the questionnaire
    score_food INTEGER DEFAULT 0, -- related to the food category from the questionnaire
    score_lifestyle INTEGER DEFAULT 0, -- related to the lifestyle category from the questionnaire
    score_recycling INTEGER DEFAULT 0, -- related to the recycling category from the questionnaire
    score_actions INTEGER DEFAULT 0, -- related to the total sum of the actions points
    score_total INTEGER DEFAULT 0 -- related to the total sum of the other scores
);

CREATE TABLE IF NOT EXISTS badges (
    badge_id SERIAL PRIMARY KEY,
    badge_name TEXT NOT NULL,
    badge_description TEXT NOT NULL,
    badge_img_url TEXT NOT NULL,
    badge_req_points INTEGER NOT NULL,
    badge_type TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP,
    question TEXT,
    question_type VARCHAR(100),
    is_signup BOOLEAN
);

CREATE TABLE IF NOT EXISTS answers (
    user_auth_id TEXT PRIMARY KEY REFERENCES users (user_auth_id) ON DELETE CASCADE,
    created_at TIMESTAMP,
    question_answers JSONB DEFAULT '[]'::jsonb,
    carbon_emission_result INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    user_auth_id TEXT REFERENCES users (user_auth_id) ON DELETE CASCADE,
    title VARCHAR(225) UNIQUE NOT NULL,
    slug VARCHAR(225) UNIQUE NOT NULL,
    category TEXT NOT NULL,
    post_picture_url TEXT DEFAULT '',
    content TEXT NOT NULL,
    post_likes JSONB DEFAULT '[]'::jsonb,
    post_comments JSONB DEFAULT '[]'::jsonb
);

CREATE TABLE IF NOT EXISTS post_comments (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP,
    user_auth_id TEXT REFERENCES users (user_auth_id) ON DELETE CASCADE,
    post_id INT REFERENCES posts (id),
    content TEXT
);


-- Insert data into the tables
INSERT INTO users 
  (created_at, user_auth_id, first_name, last_name, username, email, short_bio, profile_picture_url, user_achvs, user_actns)
VALUES
  ('2023-08-31T23:37:35.000Z', 'user-live-31e96c2c-329b-4bc2-9f26-8cdf394b3e37', 'EcoWay', 'Pursuit', 'ecoway.dev5', 'ecoway.dev5@gmail.com', 'I am the Admin of this project :)', 'https://lh3.googleusercontent.com/a/ACg8ocK2bi7blV5RtmHuQEDJHAFmo8kGxmjUrH9B5y4Ty8As=s96-c', '[
    { "badge_id": 1, "badge_name": "Consistent Player", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/consistent+player.png",  "received_date": "2023-09-06T23:37:35.000Z" },
    { "badge_id": 4, "badge_name": "Recycle Crusader", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/recycle+crusader.png",  "received_date": "2023-08-31T23:37:35.000Z" },
    { "badge_id": 16, "badge_name": "Eco-Chef Connoisseur", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/eco+chef+connoiseur.png", "received_date": "2023-08-31T23:37:35.000Z" }
  ]', '[
    { "action_slug": "hybrid-or-electric-vehicles", "completed_at": "2023-09-02T23:21:20.000Z", "points": 100 },
    { "action_slug": "seal-home-leaks", "completed_at": "2023-09-02T23:21:20.000Z", "points": 70 },
    { "action_slug": "solar-panels", "completed_at": "2023-09-02T23:21:20.000Z", "points": 100 }
  ]'),
  ('2023-09-02T23:21:20.000Z', 'user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e', 'Jinseok', 'Jung', 'jj', 'pjungjs@gmail.com', 'Full Stack Web Developer', 'https://ca.slack-edge.com/TCVA3PF24-U041NJ82RM0-22a6eba57651-512', '[
    { "badge_id": 1, "badge_name": "Consistent Player", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/consistent+player.png",  "received_date": "2023-09-02T23:21:20.000Z" },
    { "badge_id": 2, "badge_name": "Jukebox Hero", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/jukebox+hero.png",  "received_date": "2023-10-02T23:21:20.000Z" },
    { "badge_id": 7, "badge_name": "Energy-Efficient Enthusiast", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/energy+efficient+enthusiast.png",  "received_date": "2023-09-02T23:21:20.000Z" },
    { "badge_id": 13, "badge_name": "Bicycle Boss", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/Bicycle+Boss.png",  "received_date": "2023-09-02T23:21:20.000Z" }
  ]', '[
    { "action_slug": "led-lighting", "completed_at": "2023-09-02T23:21:20.000Z", "points": 40 },
    { "action_slug": "biking-or-walking", "completed_at": "2023-09-02T23:21:20.000Z", "points": 30 },
    { "action_slug": "telecommuting", "completed_at": "2023-09-02T23:21:20.000Z", "points": 50 }
  ]'),
  ('2023-09-04T19:35:07.000Z', 'user-live-211736d8-6627-48d5-b668-2bca308c4059', 'Wilghen', 'Santos', 'wilghensantos', 'wilghensantos@gmail.com', 'Passionate about Music, programming and life.', 'https://lh3.googleusercontent.com/a/ACg8ocJUOfy0bJBrPz2j33CbOWlrIJ2iMnbOzLOyGRR8EelM7n4=s96-', '[
    { "badge_id": 1, "badge_name": "Consistent Player", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/consistent+player.png",  "received_date": "2023-09-06T23:37:35.000Z" },
    { "badge_id": 10, "badge_name": "Green Master", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/green+Master.png",  "received_date": "2023-08-31T23:37:35.000Z" },
    { "badge_id": 16, "badge_name": "Eco Chef Connoisseur", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/eco+chef+connoiseur.png",  "received_date": "2023-08-31T23:37:35.000Z" },
    { "badge_id": 17, "badge_name": "Zero Waste Foodie", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/zero+waste+foodie.png",  "received_date": "2023-08-31T23:37:35.000Z" }
  ]', '[
    { "action_slug": "eat-plant-based-meals", "completed_at": "2023-09-02T23:21:20.000Z", "points": 40 },
    { "action_slug": "buy-local-and-seasonal", "completed_at": "2023-09-02T23:21:20.000Z", "points": 30 },
    { "action_slug": "reduce-food-waste", "completed_at": "2023-09-02T23:21:20.000Z", "points": 40 }
  ]'),
  ('2023-09-06T22:29:59.000Z', 'user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9', 'Jose', 'Cepeda', 'josecepeda', 'josecepeda@pursuit.org', 'Full Stack Web Developer', 'https://lh3.googleusercontent.com/a/ACg8ocIHEfs1bXismg-VnVSCEFr_mJtVuSCi3YhSLQuzf2_i=s96-c', '[
    { "badge_id": 7, "badge_name": "Energy-Efficient Enthusiast", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/energy+efficient+enthusiast.png",  "received_date": "2023-09-02T23:21:20.000Z" },
    { "badge_id": 8, "badge_name": "Carbon Footprint Wizard", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/carbon+footprint+wizard.png",  "received_date": "2023-08-31T23:37:35.000Z" }
  ]', '[]'),
  ('2023-09-10T17:40:36.000Z', 'user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf', 'Shareeka', 'Epps', 'shareekaepps', 'shareekaepps@gmail.com', 'Full Stack Web Developer', 'https://lh3.googleusercontent.com/a/ACg8ocKAvDJej1E21YolQIyfadkqo5vddSF6sUn2oacrD17FDA=s96-c', '[
    { "badge_id": 10, "badge_name": "Green Master", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/green+Master.png",  "received_date": "2023-08-31T23:37:35.000Z" },
    { "badge_id": 11, "badge_name": "Eco-Picasso", "badge_img_url": "https://ecoway.s3.amazonaws.com/BadgesImages/eco+picasso.png",  "received_date": "2023-08-31T23:37:35.000Z" }
  ]', '[
    { "action_slug": "educate-yourself-and-others", "completed_at": "2023-09-02T23:21:20.000Z", "points": 40 },
    { "action_slug": "learn-local-recycling-rules", "completed_at": "2023-09-02T23:21:20.000Z", "points": 40 },
    { "action_slug": "recycle-electronics", "completed_at": "2023-09-02T23:21:20.000Z", "points": 40 }
  ]');


INSERT INTO user_scores 
  (user_auth_id, score_logged_in, score_energy, score_transportation, score_food, score_lifestyle, score_recycling, score_actions, score_total)
VALUES
  ('user-live-31e96c2c-329b-4bc2-9f26-8cdf394b3e37', 7, 0, 0, 1500, 0, 1500, 270, 3277),
  ('user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e', 30, 1500, 1500, 0, 0, 0, 120, 3150),
  ('user-live-211736d8-6627-48d5-b668-2bca308c4059', 7, 0, 0, 3000, 1500, 0, 110, 4617),
  ('user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9', 0, 3000, 0, 0, 0, 0, 0, 3000),
  ('user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf', 0, 0, 0, 0, 3000, 0, 120, 3120);


INSERT INTO badges 
  (badge_name, badge_description, badge_img_url, badge_req_points, badge_type)
VALUES 
  ('Consistent Player', 'You have logged to the app for 7 days in a row', 'https://ecoway.s3.amazonaws.com/BadgesImages/consistent+player.png', 7, 'login'),
  ('Jukebox Hero', 'You have logged to the app for 30 days in a row', 'https://ecoway.s3.amazonaws.com/BadgesImages/jukebox+hero.png', 30, 'login'),
  ('Elite Player', 'You have logged to the app for 60 days in a row', 'https://ecoway.s3.amazonaws.com/BadgesImages/elite+player.png', 60, 'login'),

  ('Recycle Crusader', 'Based on your daily efforts you have mastered the art of recycling, Keep it up! ', 'https://ecoway.s3.amazonaws.com/BadgesImages/recycle+crusader.png', 1500, 'recycling'),
  ('Recycle Artisan', 'As if we were not blown by your recycling habits, you have recycled enough to keep 10 miles of beach pristine, awesome', 'https://ecoway.s3.amazonaws.com/BadgesImages/Recycling+Artisan.png', 3000, 'recycling'),
  ('Reusable Crusader', 'You have officially joined the ranks of the eco-warriors by consistently using reusable bags, bottles, and containers.', 'https://ecoway.s3.amazonaws.com/BadgesImages/Reusable+Crusader.png', 6000, 'recycling'),

  ('Energy-Efficiency Enthusiast', 'You have replaced all your traditional light bulbs with energy-efficient LEDs. Your home is lit with eco-friendly brilliance!', 'https://ecoway.s3.amazonaws.com/BadgesImages/energy+efficient+enthusiast.png', 1500, 'energy' ),
  ('Carbon Footprint Wizard', 'Your energy-saving habits have reduced your carbon footprint, conserved precious resources equivalent to keep a small village sustainable, and shown others the power of green living.', 'https://ecoway.s3.amazonaws.com/BadgesImages/carbon+footprint+wizard.png', 3000, 'energy'),
  ('Green Guru', 'You have reached a milestone in energy efficiency, power dynamo! Your commitment is like turning off 500 light bulbs for an entire year. Keep shining bright!', 'https://ecoway.s3.amazonaws.com/BadgesImages/green+guru.png', 6000,'energy'),

  ('Green Master', 'Lifestyle Luminary! Your eco-conscious choices are like a beacon of sustainability. You have made a positive impact equivalent to planting 20 trees. Keep living the green life!', 'https://ecoway.s3.amazonaws.com/BadgesImages/green+Master.png', 1500, 'lifestyle' ),
  ('Eco-Picasso', 'You have transformed into 10 works of art the equivalent of 20 pounds of recycled materials. Your creations are eco-masterpieces!', 'https://ecoway.s3.amazonaws.com/BadgesImages/eco+picasso.png', 3000, 'lifestyle'),
  ('Eco-Bookworm', 'Your consitent habits shows your knowledge about gree living. Have you been in the library lately ? is like you have read 10 books on sustainability and eco-conscious living. Your mind is a garden of eco-ideas!', 'https://ecoway.s3.amazonaws.com/BadgesImages/eco+worm+book.png', 6000, 'lifestyle' ),

  ('Bicycle Boss', 'Pedal Powerhouse! You have earned the Bicycle Boss badge. Your 100 miles on two wheels are like planting 10 trees along the bike path. Keep riding toward a greener tomorrow!', 'https://ecoway.s3.amazonaws.com/BadgesImages/Bicycle+Boss.png', 1500, 'transportation'),
  ('Eco-Adventurer', 'Congratulations, Eco-Adventurer! Your sustainable travels have a carbon footprint lower than a trek through the wilderness. Keep exploring responsibly!', 'https://ecoway.s3.amazonaws.com/BadgesImages/eco+adventurer.png',3000 ,'transportation'),
  ('Public transit trailblazer', 'Your commitment to public transportation has made city streets cleaner and traffic lighter. You are a pioneer of urban eco-commuting.', 'https://ecoway.s3.amazonaws.com/BadgesImages/public+transportation+trailblazer.png', 6000, 'transportation'),

  ('Eco-Chef Connoisseur', 'You have cooked 30 plant-based meals. You are a culinary eco-genius!', 'https://ecoway.s3.amazonaws.com/BadgesImages/eco+chef+connoiseur.png', 1500, 'food'),
  ('Zero Waste Foodie', 'You have taken zero-waste cooking to a whole new level. As a Zero-Waste Epicurean, your kitchen is a sustainability paradise! Your culinary efforts are equivalent to removing 500 pounds of CO2 from the atmosphere!', 'https://ecoway.s3.amazonaws.com/BadgesImages/zero+waste+foodie.png', 3000, 'food'),
  ('Sustainable Sustainer', 'Your commitment to sustainable eating makes you a Sustainable Sustainer. Your food choices are as green as can be!  Your eco-conscious diet is equivalent to saving 100,000 gallons of water', 'https://ecoway.s3.amazonaws.com/BadgesImages/sustainable+sustainer.png', 6000, 'food' );


INSERT INTO questions 
  (created_at, question, question_type, is_signup)
VALUES
  ('2023-09-08T12:30:00Z', 'Does your household use renewable energy?', 'energy', true),
  ('2023-09-08T12:30:00Z', 'What is the primary heating source in your household?', 'energy', true),
  ('2023-09-08T12:30:00Z', 'Do you use gas for cooking?', 'energy', true),
  ('2023-09-08T12:30:00Z', 'Do you have a car?', 'transportation', true),
  ('2023-09-08T12:30:00Z', 'How many minutes do you spend taking public transportation a day?', 'transportation', true),
  ('2023-09-08T12:30:00Z', 'How many large sized appliances have you purchased in the past year?', 'spending', true),
  ('2023-09-08T12:30:00Z', 'How many medium sized appliances have you purchased in the past year?', 'spending', true),
  ('2023-09-08T12:30:00Z', 'How many small sized appliances have you purchased in the past year?', 'spending', true),
  ('2023-09-08T12:30:00Z', 'How many pieces of clothing have you purchased this year?', 'spending', true),
  ('2023-09-08T12:30:00Z', 'What is your diet?', 'food', true),
  ('2023-09-08T12:30:00Z', 'Do you recycle?', 'lifestyle', true),
  ('2023-09-09T12:30:00Z', 'Select the option that best describes your household energy usage compared to your last login:', 'energy', false),
  ('2023-09-09T12:30:00Z', 'Pick the option that best represents your daily transportation habits compared to your last login:', 'transportation', false),
  ('2023-09-09T12:30:00Z', 'How many miles have you biked this week?', 'transportation', false),
  ('2023-09-09T12:30:00Z', 'How has your recycling behavior changed?', 'recycling', false),
  ('2023-09-09T12:30:00Z', 'Do you actively compost organic waste?', 'recycling', false),
  ('2023-09-09T12:30:00Z', 'How has your diet changed?', 'food', false),
  ('2023-09-09T12:30:00Z', 'How many home-cooked meals have you made this week?', 'food', false),
  ('2023-09-09T12:30:00Z', 'Do you support or engage in local community initiatives promoting sustainability?', 'lifestyle', false);


INSERT INTO answers 
  (created_at, user_auth_id, question_answers, carbon_emission_result)
VALUES
  ('2023-09-08T12:30:00Z', 'user-live-31e96c2c-329b-4bc2-9f26-8cdf394b3e37', '{
    "Do you have a car?": true,
    "Do you use gas for cooking?": false,
    "Does your household use renewable energy?": "no",
    "How many large sized appliances have you purchased in the past year?": 4,
    "How many medium sized appliances have you purchased in the past year?": 4,
    "How many minutes do you spend taking public transportation a day?": 10,
    "How many pieces of clothing have you purchased this year?": 6,
    "How many small sized appliances have you purchased in the past year?": 5,
    "What is the primary heating source in your household?": "electricity",
    "What is your diet?": "vegetarian",
    "What type of car do you have?": "gasoline"
  }', 19314),
  ('2023-09-08T12:30:00Z', 'user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e', '{
    "Do you have a car?": true,
    "Do you use gas for cooking?": false,
    "Does your household use renewable energy?": "no",
    "How many large sized appliances have you purchased in the past year?": 4,
    "How many medium sized appliances have you purchased in the past year?": 4,
    "How many minutes do you spend taking public transportation a day?": 10,
    "How many pieces of clothing have you purchased this year?": 6,
    "How many small sized appliances have you purchased in the past year?": 5,
    "What is the primary heating source in your household?": "electricity",
    "What is your diet?": "vegetarian",
    "What type of car do you have?": "gasoline"
  }', 19314),
  ('2023-09-08T12:30:00Z', 'user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9', '{
    "Do you have a car?": true,
    "Do you use gas for cooking?": false,
    "Does your household use renewable energy?": "no",
    "How many large sized appliances have you purchased in the past year?": 4,
    "How many medium sized appliances have you purchased in the past year?": 4,
    "How many minutes do you spend taking public transportation a day?": 10,
    "How many pieces of clothing have you purchased this year?": 6,
    "How many small sized appliances have you purchased in the past year?": 5,
    "What is the primary heating source in your household?": "electricity",
    "What is your diet?": "vegetarian",
    "What type of car do you have?": "gasoline"
  }', 19314),
  ('2023-09-08T12:30:00Z', 'user-live-211736d8-6627-48d5-b668-2bca308c4059', '{
    "Do you have a car?": true,
    "Do you use gas for cooking?": false,
    "Does your household use renewable energy?": "no",
    "How many large sized appliances have you purchased in the past year?": 4,
    "How many medium sized appliances have you purchased in the past year?": 4,
    "How many minutes do you spend taking public transportation a day?": 10,
    "How many pieces of clothing have you purchased this year?": 6,
    "How many small sized appliances have you purchased in the past year?": 5,
    "What is the primary heating source in your household?": "electricity",
    "What is your diet?": "vegetarian",
    "What type of car do you have?": "gasoline"
  }', 19314),
  ('2023-09-08T12:30:00Z', 'user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf', '{
    "Do you have a car?": true,
    "Do you use gas for cooking?": false,
    "Does your household use renewable energy?": "no",
    "How many large sized appliances have you purchased in the past year?": 4,
    "How many medium sized appliances have you purchased in the past year?": 4,
    "How many minutes do you spend taking public transportation a day?": 10,
    "How many pieces of clothing have you purchased this year?": 6,
    "How many small sized appliances have you purchased in the past year?": 5,
    "What is the primary heating source in your household?": "electricity",
    "What is your diet?": "vegetarian",
    "What type of car do you have?": "gasoline"
  }', 19314);


INSERT INTO posts 
  (created_at, user_auth_id, title, slug, category, post_picture_url, content, post_likes, post_comments)
VALUES
  ('2023-09-08T12:30:00Z', 'user-live-31e96c2c-329b-4bc2-9f26-8cdf394b3e37', 'Welcome to EcoWay', 'welcome-to-ecoway', 'general', '', 'Welcome to EcoWay app. Let us pave a Sustainable Future, One EcoWay at a Time. You can reach us by submitting your message on the Contact Us page. It will really send us an email, so any feedback is much appreciated :)', '[
    { "user_id": "user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-211736d8-6627-48d5-b668-2bca308c4059", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "liked_at": "2023-09-10T12:00:00Z" }
  ]', '[
    { "user_id": "user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e", "commented_at": "2023-09-10T12:00:00Z", "content": "Loved the app!" },
    { "user_id": "user-live-211736d8-6627-48d5-b668-2bca308c4059", "commented_at": "2023-09-10T12:00:00Z", "content": "Thank you!" },
    { "user_id": "user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9", "commented_at": "2023-09-10T12:00:00Z", "content": "Looking forward using the app." },
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "commented_at": "2023-09-10T12:00:00Z", "content": "Together we can make this planet greener~" }
  ]'),
  ('2023-09-08T10:00:00Z', 'user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e', 'Tips for Reducing Energy Consumption', 'tips-for-reducing-energy-consumption', 'tips', '', 'At its core, energy conservation means using less energy to lower costs and reduce environmental impact. This can mean using less electricity, gas, or any other form of energy that you get from your utility and pay for. With finite energy resources available on our planet, actively conserving energy when possible is beneficial individually and to our larger energy systems. Keep your lights off to the extent safely possible, including exterior lights that may be on a timer. Set your thermostat to 78 degrees or higher, health permitting, and turn your air conditioner off when not at home. Move any furniture blocking vents to be sure air is flowing efficiently. Charge your laptop and cell phone before 3 p.m. or after 9 p.m. Hang dry your clothes instead of using your dryer. Unplug energy vampires when not in use, such as televisions, game consoles, and standby coffee makers. Use a fan(s) instead of your air conditioner. Cover your windows to keep sunlight from heating your home. Cook using your stove, microwave, or outside grill instead of your oven. Limit opening your refrigerator and freezer.', '[
    { "user_id": "user-live-211736d8-6627-48d5-b668-2bca308c4059", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "liked_at": "2023-09-10T12:00:00Z" }
  ]', '[
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "commented_at": "2023-09-10T12:00:00Z", "content": "thanks for sharing the tip!" }
  ]'),
  ('2023-09-08T13:30:00Z', 'user-live-211736d8-6627-48d5-b668-2bca308c4059', 'How do I reduce food waste?', 'how-do-i-reduce-food-waste', 'question', '', 'To reduce food waste, start by planning your meals and creating a shopping list to buy only what you need. Properly store your food in airtight containers and in the appropriate temperature (e.g., the fridge or freezer) to extend its shelf life. Be mindful of expiration dates and use the first in, first out method when organizing your pantry and fridge. Get creative with leftovers by incorporating them into new meals, and be realistic about portion sizes when cooking. Additionally, compost food scraps whenever possible to divert them from landfills. Finally, raise awareness within your household about the importance of reducing food waste and make it a collective effort to minimize the amount of food that goes uneaten.', '[
    { "user_id": "user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "liked_at": "2023-09-10T12:00:00Z" }
  ]', '[
    { "user_id": "user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e", "commented_at": "2023-09-10T12:00:00Z", "content": "That is a great question.." },
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "commented_at": "2023-09-10T12:00:00Z", "content": "Check out the Take Actions page, there are some good resources and tips." }
  ]'),
  ('2023-09-08T14:00:00Z', 'user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9', 'Volunteer opportunity in NYC', 'volunteer-opportunity-in-nyc', 'resources', '', 'In New York City you can find several ecofriendly volunteer opportunities to share with others. The NYC Parks Stewardship Program offers tree planting, park cleanups, and habitat restoration projects. New York Cares, one of the citys largest volunteer organizations, has projects like urban gardening and community cleanups. GrowNYC focuses on environmental programs, including community gardens and recycling education. The Nature Conservancy - New York works to conserve natural areas and wildlife. Riverkeeper offers volunteer opportunities for river cleanups and water quality monitoring, particularly along the Hudson River. Lastly, the Sierra Clubs NYC Group organizes activities like hikes and cleanups for those interested in environmental conservation and advocacy. These organizations provide great avenues for individuals to contribute to a more ecofriendly NYC.', '[
    { "user_id": "user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-211736d8-6627-48d5-b668-2bca308c4059", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "liked_at": "2023-09-10T12:00:00Z" }
  ]', '[
    { "user_id": "user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e", "commented_at": "2023-09-10T12:00:00Z", "content": "I will try to make it" },
    { "user_id": "user-live-211736d8-6627-48d5-b668-2bca308c4059", "commented_at": "2023-09-10T12:00:00Z", "content": "Thank you!" },
    { "user_id": "user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf", "commented_at": "2023-09-10T12:00:00Z", "content": "Looking forward for this opportunity" },
    { "user_id": "user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9", "commented_at": "2023-09-10T12:00:00Z", "content": "I hope to see you guys there" }
  ]'),
  ('2023-09-08T13:30:00Z', 'user-live-db28f083-5e3f-4159-9de8-6a91a07ac2cf', 'What Will Be The Biggest Environmental Problems of 2024', 'what-will-be-the-biggest-environmental-problems-of-2024', 'general', '', 'The U.S. and the entire world face many immediate environmental issues, but some are more pressing and time-sensitive than others. Let’s review the six biggest environmental issues the U.S. faces as we near 2024. 1. Fossil Fuels: burning these fuels for energy is the leading cause of climate change 2. Deforestation: the urbanization of forested land has severe consequence. It impacts C02 emissions which contributes to global warming, and impacts wildlife and their habitats and ecosystems. 3. Air Quality 4. Drinking Water: We take drinking water for granted in the U.S., but water-contamination crises have shown to affect Flint, Michigan, Mississippi, Maryland and Hawaii. 5. Waste: the more we consume, the more waste we produce. 6. Natural Resources: natural resource depletion can lead to many issues, including water shortages, oil shortages, loss of forested lands, mineral depletion, and even species extinction.', '[
    { "user_id": "user-live-683aaf5e-f190-4f08-ab20-d0ce6e82052e", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-211736d8-6627-48d5-b668-2bca308c4059", "liked_at": "2023-09-10T12:00:00Z" },
    { "user_id": "user-live-9aeb3e25-314e-4d18-a516-d9a57319c9e9", "liked_at": "2023-09-10T12:00:00Z" }
  ]', '[
    { "user_id": "user-live-211736d8-6627-48d5-b668-2bca308c4059", "commented_at": "2023-09-10T12:00:00Z", "content": "Thanks for the info" }
  ]');
