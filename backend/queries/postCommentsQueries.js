// In your application, a controller for post comments is not strictly required, but it can be helpful for organizing and handling the logic related to comments on posts. It can also serve as a central point for managing the interaction between your routes and the database queries.

// created_at, user_auth_id, post_id, content
const db = require("../db/dbConfig");

// CREATE a new comment
const createComment = async (comment) => {
  try {
    const newComment = await db.one(
      "INSERT INTO post_comments (created_at, user_auth_id, post_id, content) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        comment.created_at,
        comment.user_auth_id,
        comment.post_id,
        comment.content,
      ]
    );
    return newComment;
  } catch (error) {
    throw error;
  }
};

// SHOW a comment
const getComment = async (postId) => {
  try {
    const comments = await db.any(
      "SELECT * FROM post_comments WHERE post_id = $1",
      postId
    );
    return comments;
  } catch (error) {
    throw error;
  }
};

// DELETE a comment
const deleteComment = async (commentId) => {
  try {
    const removed = await db.one(
      "DELETE FROM post_comments WHERE id = $1 RETURNING *",
      commentId
    );
    return removed;
  } catch (error) {
    throw error;
  }
};

// UPDATE/edit a comment
const updateComment = async (commentId, updatedComment) => {
  try {
    const updated = await db.one(
      "UPDATE post_comments SET content = $1 WHERE id = $2 RETURNING *",
      [updatedComment.content, commentId]
    );
    return updated;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getComment,
  createComment,
  deleteComment,
  updateComment,
};
