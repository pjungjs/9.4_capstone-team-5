const express = require('express');
const actions = express.Router({ mergeParams: true });
const {
  getUsersActns,
  getUserActns,
  addUserActn,
  removeUserActn,
} = require('../queries/actionsQueries.js');

/** User's Actions
 * GET all
 * GET one
 * UPDATE - add
 * UPDATE - remove
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

// add action
actions.put('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const addActn = req.body;

  const updatedActns = await addUserActn(userAuthId, addActn);

  if (updatedActns.success) {
    res.status(200).json(updatedActns.payload);
  } else {
    res.status(400).json({
      error: `users: add action update route error. ${updatedActns.payload}`,
    });
  }
});

// remove action
actions.put('/:userAuthId/:actionSlug', async (req, res) => {
  const { userAuthId, actionSlug } = req.params;

  const updatedActns = await removeUserActn(userAuthId, actionSlug);

  if (updatedActns.success) {
    res.status(200).json(updatedActns.payload);
  } else {
    res.status(400).json({
      error: `users: remove action update route error. ${updatedActns.payload}`,
    });
  }
});

module.exports = actions;
