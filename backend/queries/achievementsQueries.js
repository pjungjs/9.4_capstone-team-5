const db = require('../db/dbConfig.js');

/** User's Achievements
 * GET all
 * GET one
 * UPDATE
 */
const getUsersAchvs = async () => {
  try {
    const usersAchvs = await db.any(
      'SELECT user_auth_id, user_achvs FROM users;'
    );
    return { success: true, payload: usersAchvs };
  } catch (error) {
    return {
      success: false,
      payload: `users: achievements index query error. ${error}`,
    };
  }
};

const getUserAchvs = async (userAuthId) => {
  try {
    const userAchvs = await db.one(
      'SELECT user_achvs FROM users WHERE user_auth_id=$1;',
      userAuthId
    );
    return { success: true, payload: userAchvs };
  } catch (error) {
    return {
      success: false,
      payload: `users: achievements show query error. ${error}`,
    };
  }
};

const updateUserAchvs = async (userAuthId, achvsToUpdate) => {
  // data format to send on the body:
  //an object of "badge_name" and "received_date".
  
  //add one badge at a time to the existing data
  //e.g.: { "badge_name": "bage name", "received_date": "date" }

  try {
    const updatedAchvs = await db.one(
      'UPDATE users SET user_achvs=user_achvs || $1 WHERE user_auth_id=$2 RETURNING *;',
      [achvsToUpdate, userAuthId]
    );
    return { success: true, payload: updatedAchvs };
  } catch (error) {
    return {
      success: false,
      payload: `users: achievements update query error. ${error}`,
    };
  }
};

module.exports = {
  getUsersAchvs,
  getUserAchvs,
  updateUserAchvs,
};
