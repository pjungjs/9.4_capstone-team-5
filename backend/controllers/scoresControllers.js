const express = require('express');
const scores = express.Router({ mergeParams: true });
const {
  getUsersScores,
  getUserScores,
  createUserScores,
  updateUserScores,
} = require('../queries/scoresQueries.js');

/** User's Scores
 * GET all
 * GET one
 * CREATE
 * UPDATE
 */
scores.get('/', async (_, res) => {
  const usersScores = await getUsersScores();

  if (usersScores.success) {
    res.status(200).json(usersScores.payload);
  } else {
    res.status(400).json({
      error: `users: scores index route error. ${usersScores.payload}`,
    });
  }
});

scores.get('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const userScores = await getUserScores(userAuthId);

  if (userScores.success) {
    res.status(200).json(userScores.payload);
  } else {
    res.status(400).json({
      error: `users: scores show route error. ${userScores.payload}`,
    });
  }
});

scores.post('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const createdScores = await createUserScores(userAuthId);

  if (createdScores.success) {
    res.status(200).json(createdScores.payload);
  } else {
    res
      .status(400)
      .json({ error: `users: create route error. ${createdScores.payload}` });
  }
});

scores.put('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const editScores = req.body;
  const updatedScores = await updateUserScores(userAuthId, editScores);

  if (updatedScores.success) {
    res.status(200).json(updatedScores.payload);
  } else {
    res.status(400).json({
      error: `users: scores update route error. ${updatedScores.payload}`,
    });
  }
});

module.exports = scores;
