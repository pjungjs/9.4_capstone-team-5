const express = require('express');
const achievements = express.Router({ mergeParams: true });
const {
  getUsersAchvs,
  getUserAchvs,
  updateUserAchvs,
} = require('../queries/achievementsQueries.js');

/** User's Achievements
 * GET all
 * GET one
 * UPDATE
 */
achievements.get('/', async (_, res) => {
  const usersAchvs = await getUsersAchvs();

  if (usersAchvs.success) {
    res.status(200).json(usersAchvs.payload);
  } else {
    res.status(400).json({
      error: `users: achievements index route error. ${usersAchvs.payload}`,
    });
  }
});

achievements.get('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const userAchvs = await getUserAchvs(userAuthId);

  if (userAchvs.success) {
    res.status(200).json(userAchvs.payload);
  } else {
    res.status(400).json({
      error: `users: achievements show route error. ${userAchvs.payload}`,
    });
  }
});

achievements.put('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const editAchvs = req.body;

  const updatedAchvs = await updateUserAchvs(userAuthId, editAchvs);

  if (updatedAchvs.success) {
    res.status(200).json(updatedAchvs.payload);
  } else {
    res.status(400).json({
      error: `users: achievements update route error. ${updatedAchvs.payload}`,
    });
  }
});

module.exports = achievements;
