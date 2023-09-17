// seperation of concerns, any logic that goes to controllers endpoint will be written inside postController
const express = require('express');
const posts = express.Router();
const { getAllPosts, getPost, createPost, deletePost, updatePost } = require('../queries/postQueries');

// INDEX
posts.get('/', async (req, res) => {
    const allPosts = await getAllPosts();

    if (allPosts[0]) {
        res.status(202).json(allPosts);
    } else {
        res.status(500).json({error: 'Server Error'})
    }
});

// SHOW
posts.get('/:id', async (req, res) => {
    const { id } = req.params;
    const post = await getPost(id);

    if(post) {
        res.json(post);
    } else {
        res.status(404).json({ error: "Sorry that Post was not found" })
    }
})

// CREATE
posts.post('/', async (req, res) => {
    const newPost = req.body;

    try {
        const addedPost = await createPost(newPost);
        res.status(202).json(addedPost)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

// DELETE
posts.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const removed = await deletePost(id);
    if(deletePost.id) {
        res.status(200).json(removed);
    } else {
        res.status(404).json({ error: "Post was not found"});
    }
});

// UPDATE
posts.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updated = await updatePost(id, body);
        res.status(200).json(updated);
    } catch (error){
        res.status(400).json({ error: "Post could not be updated"});
    };
});


module.exports = posts;