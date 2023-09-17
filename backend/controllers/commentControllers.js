const express = require('express');
const comments = express.Router();
const {
  getComment,
  createComment,
  deleteComment,
  updateComment,
} = require('../queries/postCommentsQueries');


// CREATE (Add a Comment)
comments.post('/', async (req, res) => {
  const newComment = req.body;

  try {
    const addedComment = await createComment(newComment);
    res.status(202).json(addedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ (Get Comments for a Post)
comments.get('/post/:postId', async (req, res) => {
  const { postId } = req.params;

  try {
    const commentsForPost = await getComment(postId);
    res.status(200).json(commentsForPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE (Edit a Comment)
comments.put('/:commentId', async (req, res) => {
  const { commentId } = req.params;
  const updatedComment = req.body;

  try {
    const updated = await updateComment(commentId, updatedComment);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE (Delete a Comment)
comments.delete('/:commentId', async (req, res) => {
  const { commentId } = req.params;

  try {
    const removedComment = await deleteComment(commentId);
    res.status(200).json(removedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = comments;
