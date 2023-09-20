const express = require('express');
const actions = express.Router({ mergeParams: true });
const {
  getUsersActns,
  getUserActns,
  updateUserActns,
} = require('../queries/actionsQueries.js');

/** User's Actions
 * GET all
 * GET one
 * UPDATE
 */
actions.get('/', async (_, res) => {
  const usersActns = await getUsersActns();

  if (usersActns.success) {
    res.status(200).json(usersActns.payload);
  } else {
    res.status(400).json({
      error: `users: actions index route error. ${usersActns.payload}`,
    });
  }
});

actions.get('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const userActns = await getUserActns(userAuthId);

  if (userActns.success) {
    res.status(200).json(userActns.payload);
  } else {
    res.status(400).json({
      error: `users: actions show route error. ${userActns.payload}`,
    });
  }
});

actions.put('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const editActns = req.body;

  const updatedActns = await updateUserActns(userAuthId, editActns);

  if (updatedActns.success) {
    res.status(200).json(updatedActns.payload);
  } else {
    res.status(400).json({
      error: `users: actions update route error. ${updatedActns.payload}`,
    });
  }
});

module.exports = actions;
