DROP DATABASE IF EXISTS ecoway_dev;

CREATE DATABASE ecoway_dev;

\c ecoway_dev;

CREATE TABLE users (
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

CREATE TABLE user_scores (
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

CREATE TABLE badges (
    badge_id SERIAL PRIMARY KEY,
    badge_name TEXT NOT NULL,
    badge_description TEXT NOT NULL,
    badge_img_url TEXT NOT NULL,
    badge_req_points INTEGER NOT NULL,
    badge_type TEXT NOT NULL
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP,
    question TEXT,
    question_type VARCHAR(100),
    is_signup BOOLEAN
);

CREATE TABLE answers (
    user_auth_id TEXT PRIMARY KEY REFERENCES users (user_auth_id) ON DELETE CASCADE,
    created_at TIMESTAMP,
    question_answers JSONB DEFAULT '[]'::jsonb,
    carbon_emission_result INTEGER DEFAULT 0
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    user_auth_id TEXT REFERENCES users (user_auth_id) ON DELETE CASCADE,
    title VARCHAR(225) UNIQUE NOT NULL,
    slug VARCHAR(225) UNIQUE NOT NULL,
    category TEXT NOT NULL,
    post_picture_url TEXT,
    content TEXT NOT NULL,
    post_likes JSONB DEFAULT '[]'::jsonb,
    post_comments JSONB DEFAULT '[]'::jsonb
);

CREATE TABLE post_comments (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP,
    user_auth_id TEXT REFERENCES users (user_auth_id) ON DELETE CASCADE,
    post_id INT REFERENCES posts (id),
    content TEXT
);
