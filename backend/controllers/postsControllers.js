const express = require('express');
const posts = express.Router();
const {
  getAllPosts,
  getUserPosts,
  getOnePost,
  createPost,
  updatePost,
  updatePostLikes,
  updatePostComments,
  deletePost,
} = require('../queries/postsQueries.js');

/** User's Posts
 * GET all from all users
 * GET all from one user
 * GET one
 * CREATE
 * UPDATE - update the post's category and content
 * UPDATE - update the post's likes
 * UPDATE - update the post's comments
 * DELETE
 */
posts.get('/', async (_, res) => {
  const allPosts = await getAllPosts();

  if (allPosts.success) {
    res.status(200).json(allPosts.payload);
  } else {
    res.status(400).json(allPosts.payload);
  }
});

posts.get('/user/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const userPosts = await getUserPosts(userAuthId);

  if (userPosts.success) {
    res.status(200).json(userPosts.payload);
  } else {
    res.status(400).json(userPosts.payload);
  }
});

posts.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  const onePost = await getOnePost(slug);

  if (onePost.success) {
    res.status(200).json(onePost.payload);
  } else {
    res.status(400).json(onePost.payload);
  }
});

posts.post('/', async (req, res) => {
  const newPost = req.body;
  const createdPost = await createPost(newPost);

  if (createdPost.success) {
    res.status(200).json(createdPost.payload);
  } else {
    res.status(400).json(createdPost.payload);
  }
});

posts.put('/:slug', async (req, res) => {
  const { slug } = req.params;
  const editPost = req.body;
  const updatedPost = await updatePost(slug, editPost);

  if (updatedPost.success) {
    res.status(200).json(updatedPost.payload);
  } else {
    res.status(400).json(updatedPost.payload);
  }
});

posts.put('/likes/:slug', async (req, res) => {
  const { slug } = req.params;
  const editPostLikes = req.body;
  const updatedPostLikes = await updatePostLikes(slug, editPostLikes);

  if (updatedPostLikes.success) {
    res.status(200).json(updatedPostLikes.payload);
  } else {
    res.status(400).json(updatedPostLikes.payload);
  }
});

posts.put('/comments/:slug', async (req, res) => {
  const { slug } = req.params;
  const editPostComments = req.body;
  const updatedPostComments = await updatePostComments(slug, editPostComments);

  if (updatedPostComments.success) {
    res.status(200).json(updatedPostComments.payload);
  } else {
    res.status(400).json(updatedPostComments.payload);
  }
});

//delete route
posts.delete('/:slug', async (req, res) => {
  const { slug } = req.params;
  const deletedPost = await deletePost(slug);

  if (deletedPost.success) {
    res.status(200).json(deletedPost.payload);
  } else {
    res.status(400).json(deletedPost.payload);
  }
});

module.exports = posts;
