const db = require('../db/dbConfig.js');

/** User's Information
 * GET all
 * GET one
 * DELETE
 * CREATE
 * UPDATE
 */
//index query: all users
const getUsers = async () => {
  try {
    const allUsers = await db.any('SELECT * FROM users;');
    return { success: true, payload: allUsers };
  } catch (error) {
    return { success: false, payload: `users: index query error. ${error}` };
  }
};

//show query: one user by user_auth_id
const getUser = async (userAuthId) => {
  try {
    const oneUser = await db.one(
      'SELECT * FROM users WHERE user_auth_id=$1;',
      userAuthId
    );
    return { success: true, payload: oneUser };
  } catch (error) {
    return { success: false, payload: `users: show query error. ${error}` };
  }
};

//delete query: one user by user_auth_id
const deleteUser = async (userAuthId) => {
  try {
    const deletedUser = await db.one(
      'DELETE FROM users WHERE user_auth_id=$1 RETURNING *;',
      userAuthId
    );
    return { success: true, payload: deletedUser };
  } catch (error) {
    return { success: false, payload: `users: delete query error. ${error}` };
  }
};

//create query: if the user exists return the existing user, if not, create a new user
const createUser = async (userToAdd) => {
  const {
    created_at,
    user_auth_id,
    first_name,
    last_name,
    username,
    email,
    short_bio,
    profile_picture_url,
  } = userToAdd;

  try {
    const existingUser = await db.oneOrNone(
      'SELECT * FROM users WHERE user_auth_id=$1;',
      [user_auth_id]
    );

    if (existingUser) {
      return { success: true, payload: existingUser };
    } else {
      const createdUser = await db.one(
        'INSERT INTO users (created_at, user_auth_id, first_name, last_name, username, email, short_bio, profile_picture_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
        [
          created_at,
          user_auth_id,
          first_name,
          last_name,
          username,
          email,
          short_bio,
          profile_picture_url,
        ]
      );
      return { success: true, payload: createdUser };
    }
  } catch (error) {
    return { success: false, payload: `users: create query error. ${error}` };
  }
};

//update query: an existing user
const updateUser = async (userAuthId, userToUpdate) => {
  const { first_name, last_name, username, short_bio, profile_picture_url } =
    userToUpdate;

  try {
    const updatedUser = await db.one(
      'UPDATE users SET first_name=$1, last_name=$2, username=$3, short_bio=$4, profile_picture_url=$5 WHERE user_auth_id=$6 RETURNING *;',
      [first_name, last_name, username, short_bio, profile_picture_url, userAuthId]
    );
    return { success: true, payload: updatedUser };
  } catch (error) {
    return {
      success: false,
      payload: `users: update query error. ${error}`,
    };
  }
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
};
