const express = require('express');
const users = express.Router();
const {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
} = require('../queries/usersQueries.js');

const achievementsControllers = require('./achievementsControllers.js');
users.use('/achievements', achievementsControllers);

/** User's Information
 * GET all
 * GET one
 * DELETE
 * CREATE
 * UPDATE
 */
//index route
users.get('/', async (_, res) => {
  const allUsers = await getUsers();

  if (allUsers.success) {
    res.status(200).json(allUsers.payload);
  } else {
    res
      .status(400)
      .json({ error: `users: index route error. ${allUsers.payload}` });
  }
});

//show route by user_auth_id
users.get('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const oneUser = await getUser(userAuthId);

  if (oneUser.success) {
    res.status(200).json(oneUser.payload);
  } else {
    res
      .status(400)
      .json({ error: `users: show route error. ${oneUser.payload}` });
  }
});

//delete route
users.delete('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const deletedUser = await deleteUser(userAuthId);

  if (deletedUser.success) {
    res.status(200).json(deletedUser.payload);
  } else {
    res
      .status(400)
      .json({ error: `users: delete route error. ${deletedUser.payload}` });
  }
});

//create route
users.post('/', async (req, res) => {
  const newUser = req.body;
  const createdUser = await createUser(newUser);

  if (createdUser.success) {
    res.status(200).json(createdUser.payload);
  } else {
    res
      .status(400)
      .json({ error: `users: create route error. ${createdUser.payload}` });
  }
});

//update route
users.put('/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;
  const editUser = req.body;
  const updatedUser = await updateUser(userAuthId, editUser);

  if (updatedUser.success) {
    res.status(200).json(updatedUser.payload);
  } else {
    res.status(400).json({
      error: `users: update route error. ${updatedUser.payload}`,
    });
  }
});

module.exports = users;
