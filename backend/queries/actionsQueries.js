const db = require('../db/dbConfig.js');

/** User's Actions
 * GET all
 * GET one
 * UPDATE - add
 * UPDATE - remove
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

//add a new completed action
const addUserActn = async (userAuthId, actnToAdd) => {
  // data format to send on the body: an object of "action_slug", "completed_at" and "points"
  //e.g.: { "action_slug": "reduce-single-use-plastics", "completed_at": "2023-09-02T23:21:20.000Z", "points": 30 }
  try {
    const addedActn = await db.one(
      'UPDATE users SET user_actns = user_actns || $1::jsonb WHERE user_auth_id = $2 RETURNING *;',
      [actnToAdd, userAuthId]
    );
    return { success: true, payload: addedActn };
  } catch (error) {
    return {
      success: false,
      payload: `users: add action update query error. ${error}`,
    };
  }
};

//remove an exsiting completed action by "action_slug"
const removeUserActn = async (userAuthId, actnSlugToRemove) => {
  // COALESCE(..., '[]'::jsonb)
    // The COALESCE function returns the first argument that is not null. If all arguments are null, the COALESCE function will return null.
    // But in this case, it returns an empty JSONB array ('[]'::jsonb).
  
  // (SELECT jsonb_agg(elem) FROM jsonb_array_elements(user_actns) AS elem WHERE elem->>'action_slug' <> $1)
    // This subquery iterates through each element of the user_actns JSONB array, checks if the "action_slug" is not equal to the value specified by $1, and aggregates the remaining elements back into a JSONB array using jsonb_agg.

  try {
    const removedActn = await db.one(
      "UPDATE users SET user_actns = COALESCE( ( SELECT jsonb_agg(elem) FROM jsonb_array_elements(user_actns) AS elem WHERE elem->>'action_slug' <> $1 ), '[]'::jsonb ) WHERE user_auth_id = $2 RETURNING *;",
      [actnSlugToRemove, userAuthId]
    );
    return { success: true, payload: removedActn };
  } catch (error) {
    return {
      success: false,
      payload: `users: remove action update query error. ${error}`,
    };
  }
};

module.exports = {
  getUsersActns,
  getUserActns,
  addUserActn,
  removeUserActn,
};
