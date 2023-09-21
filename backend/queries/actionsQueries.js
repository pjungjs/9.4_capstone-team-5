const db = require('../db/dbConfig.js');

/** User's Actions
 * GET all
 * GET one
 * UPDATE
 */
const getUsersActns = async () => {
  try {
    const usersActns = await db.any(
      'SELECT user_auth_id, user_actns FROM users;'
    );
    return { success: true, payload: usersActns };
  } catch (error) {
    return {
      success: false,
      payload: `users: actions index query error. ${error}`,
    };
  }
};

const getUserActns = async (userAuthId) => {
  try {
    const userActns = await db.one(
      'SELECT user_actns FROM users WHERE user_auth_id=$1;',
      userAuthId
    );
    return { success: true, payload: userActns };
  } catch (error) {
    return {
      success: false,
      payload: `users: actions show query error. ${error}`,
    };
  }
};

const updateUserActns = async (userAuthId, actnsToUpdate) => {
  // data format to send on the body:
  //an object of "action_slug", "added_on" and "completed_on".

  //update with a whole new array of objects (adds multiple at once)
  /** e.g.:
    [
      { "action_slug": "1", "added_on": "2023-09-01T23:21:20.000Z", "completed_on": "2023-09-02T23:21:20.000Z" },
      { "action_slug": "2", "added_on": "2023-09-02T23:21:20.000Z", "completed_on": "2023-09-03T23:21:20.000Z" }
    ]
  */

  try {
    const updatedActns = await db.one(
      'UPDATE users SET user_actns=$1::jsonb WHERE user_auth_id=$2 RETURNING *;',
      [JSON.stringify(actnsToUpdate), userAuthId]
    );
    return { success: true, payload: updatedActns };
  } catch (error) {
    return {
      success: false,
      payload: `users: actions update query error. ${error}`,
    };
  }
};

module.exports = {
  getUsersActns,
  getUserActns,
  updateUserActns,
};
