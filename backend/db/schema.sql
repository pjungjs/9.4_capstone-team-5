DROP DATABASE IF EXISTS badges;

CREATE DATABASE badges;

\c badges;


CREATE TABLE badges (
    badge_id SERIAL PRIMARY KEY,
    badge_name VARCHAR(255) NOT NULL,
    badge_description VARCHAR(255) NOT NULL,
    badge_points INTEGER NOT NULL,
    image text NOT NULL
);

-- CREATE TABLE users (
--     id INTEGER PRIMARY KEY,
--     user_name VARCHAR(255) NOT NULL,
--     user_email VARCHAR(255) NOT NULL,
--     user_password VARCHAR(255) NOT NULL,
--     user_points INTEGER NOT NULL
-- );

-- CREATE TABLE user_badges (
--     id INTEGER PRIMARY KEY,
--     user_id INTEGER NOT NULL,
--     badge_id INTEGER NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES users (id),
--     FOREIGN KEY (badge_id) REFERENCES badges (badge_id)
-- );

-- CREATE TABLE user_achievements (
--     id INTEGER PRIMARY KEY,
--     user_id INTEGER NOT NULL,
--     achievement_id INTEGER NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES users (id),
--     FOREIGN KEY (achievement_id) REFERENCES achievements (achievement_id)
-- );

-- CREATE TABLE achievements (
--     achievement_id INTEGER PRIMARY KEY,
--     achievement_name VARCHAR(255) NOT NULL,
--     achievement_description VARCHAR(255) NOT NULL,
--     achievement_image VARCHAR(255) NOT NULL,
--     achievement_points INTEGER NOT NULL
-- );

-- CREATE TABLE user_achievements (
--     id INTEGER PRIMARY KEY,
--     user_id INTEGER NOT NULL,
--     achievement_id INTEGER NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES users (id),
--     FOREIGN KEY (achievement_id) REFERENCES achievements (achievement_id)
-- );