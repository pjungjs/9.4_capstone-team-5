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

  const createAnswersTable = async (userAuthId) => {
    try {
      const newAnswers = await db.one(
        'INSERT INTO answers (user_auth_id) VALUES ($1) RETURNING *;',
        [userAuthId]
      );
      console.log(newAnswers)
      return newAnswers;
    } catch (error) {
      return error;
    }
  };

  const updateAnswersTable = async (answers, userAuthId) => {
    try {
      const updatedAnswers = await db.any(
        "UPDATE answers SET created_at=NOW(), question_answers=$1, carbon_emission_result=$2 WHERE user_auth_id=$3 RETURNING *",
        [answers.question_answers, answers.carbon_emission_result, userAuthId]
      );
      return updatedAnswers;
    } catch (error) {
      return error;
    }
  };
  


  module.exports = { getAllAnswers, getUserAnswers, createAnswersTable, updateAnswersTable }