// const db = require('../db/dbConfig.js');
// const { getAllPosts, getPost, createPost, deletePost, updatePost } = require('../queries/postQueries');
// created_at, user_auth_id, title, content, post_likes

const db = require("../db/dbConfig");

// GET all posts
const getAllPosts = async () => {
  try {
    const allPosts = await db.any("SELECT * FROM posts"); // .any() means accept anything that returns from db
    return allPosts;
  } catch (error) {
    return error;
  }
};

// SHOW a post by user_auth_id
const getPost = async (userAuthId) => {
  try {
    const post = await db.oneOrNone(
      "SELECT * FROM posts WHERE id=$1",
      userAuthId
    );
    return post;
    // adding a variable to sql query. takes id and injects it into variable id=$1
  } catch (error) {
    return error;
  }
};

// CREATE a new post
const createPost = async (post) => {
  try {
    const newPost = await db.one(
      "INSERT INTO posts (created_at, user_auth_id, title, content, post_likes) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        post.created_at,
        post.user_auth_id,
        post.title,
        post.content,
        post.post_likes,
      ]
    );
    return newPost;
  } catch (error) {
    return error;
  }
};

// DELETE a post by user_auth_id
const deletePost = async (userAuthId) => {
  try {
    const removed = await db.one(
      "DELETE FROM posts WHERE id=$1 RETURNING *",
      userAuthId
    );
    return removed;
  } catch (error) {
    return error;
  }
};

// UPDATE a post by user_auth_id
const updatePost = async (userAuthId, updatedPost) => {
  // {created_at, user_auth_id, title, content, post_likes}
  try {
    const updated = await db.one(
      "UPDATE posts SET created_at=$1, user_auth_id=$2, title=$3, content=$4, post_likes=$5 WHERE user_auth_id=$6 RETURNING *",
      [
        updatedPost.created_at,
        updatedPost.user_auth_id,
        updatedPost.title,
        updatedPost.content,
        updatedPost.post_likes,
        userAuthId,
      ]
    );

    return updated;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
};
