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
    const userScores = await db.one(
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
    score_carbon_result,
    score_logged_in,
    score_answered,
    score_recycled,
    score_leaderboard,
    score_active_community,
  } = scoresToUpdate;

  try {
    const updatedScores = await db.one(
      'UPDATE user_scores SET score_carbon_result=$1, score_logged_in=$2, score_answered=$3, score_recycled=$4, score_leaderboard=$5, score_active_community=$6 WHERE user_auth_id=$7 RETURNING *;',
      [
        score_carbon_result,
        score_logged_in,
        score_answered,
        score_recycled,
        score_leaderboard,
        score_active_community,
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
