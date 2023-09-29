const db = require('../db/dbConfig.js');

/** User's Scores
 * GET all
 * GET one
 * CREATE
 * UPDATE
 */
const getUsersScores = async () => {
  try {
    const usersScores = await db.any('SELECT * FROM user_scores;');
    return { success: true, payload: usersScores };
  } catch (error) {
    return {
      success: false,
      payload: `users: scores index query error. ${error}`,
    };
  }
};

const getUserScores = async (userAuthId) => {
  try {
    // if found, return user's achievements, otherwise, return null instead of error
    const userScores = await db.oneOrNone(
      'SELECT * FROM user_scores WHERE user_auth_id=$1;',
      userAuthId
    );
    return { success: true, payload: userScores };
  } catch (error) {
    return {
      success: false,
      payload: `users: scores show query error. ${error}`,
    };
  }
};

const createUserScores = async (userAuthId) => {
  try {
    const createdScores = await db.one(
      'INSERT INTO user_scores (user_auth_id) VALUES ($1) RETURNING *;',
      [userAuthId]
    );
    return { success: true, payload: createdScores };
  } catch (error) {
    return {
      success: false,
      payload: `users: scores create query error. ${error}`,
    };
  }
};

const updateUserScores = async (userAuthId, scoresToUpdate) => {
  const {
    score_logged_in,
    score_energy,
    score_transportation,
    score_food,
    score_lifestyle,
    score_recycling,
    score_actions,
    score_total,
  } = scoresToUpdate;

  try {
    const updatedScores = await db.one(
      'UPDATE user_scores SET score_logged_in=$1, score_energy=$2, score_transportation=$3, score_food=$4, score_lifestyle=$5, score_recycling=$6, score_actions=$7, score_total=$8 WHERE user_auth_id=$9 RETURNING *;',
      [
        score_logged_in,
        score_energy,
        score_transportation,
        score_food,
        score_lifestyle,
        score_recycling,
        score_actions,
        score_total,
        userAuthId,
      ]
    );
    return { success: true, payload: updatedScores };
  } catch (error) {
    return {
      success: false,
      payload: `users: scores update query error. ${error}`,
    };
  }
};

module.exports = {
  getUsersScores,
  getUserScores,
  createUserScores,
  updateUserScores,
};
