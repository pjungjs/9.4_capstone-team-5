const db = require('../db/dbConfig.js');

const getAllAnswers = async () => {
    try {
      const allAnswers = await db.any("SELECT * FROM answers");
      return allAnswers;
    } catch (error) {
      return error;
    }
  };

  const getUserAnswers = async (userAuthId) => {
    try {
      const userAnswers = await db.one("SELECT * FROM answers WHERE user_auth_id=$1;",
      userAuthId);
      return userAnswers;
    } catch (error) {
      return error;
    }
  };

  module.exports = { getAllAnswers, getUserAnswers }