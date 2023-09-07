DROP DATABASE IF EXISTS ecoway_dev;

CREATE DATABASE ecoway_dev;

\c ecoway_dev;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TEXT,
    user_auth_id TEXT,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    email TEXT,
    bio TEXT,
    profile_picture_url TEXT,
    user_achvs [],
);

CREATE TABLE user_scores (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    score_carbon_result INTEGER DEFAULT 0,
    score_loged_in INTEGER DEFAULT 0,
    score_answered INTEGER DEFAULT 0,
    score_recycled INTEGER DEFAULT 0,
    score_leaderboard INTEGER DEFAULT 0,
    score_active_community INTEGER DEFAULT 0,
);

CREATE TABLE badges (
    badge_id SERIAL PRIMARY KEY,
    badge_name VARCHAR(255) NOT NULL,
    badge_description VARCHAR(255) NOT NULL,
    badge_points INTEGER NOT NULL,
    image text NOT NULL
);


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