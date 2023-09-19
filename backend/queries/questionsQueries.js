const db = require('../db/dbConfig.js');

const getAllQuestions = async () => {
    try {
      const allQuestions = await db.any("SELECT * FROM questions");
      return allQuestions;
    } catch (error) {
      return error;
    }
  };

  const getQuestion = async (id) => {
    try {
      const oneQuestion = await db.one("SELECT * FROM questions WHERE id=$1", id);
      return oneQuestion;
    } catch (error) {
      return error;
    }
  };

  const createQuestion = async (question) => {
    try {
        const newQuestion = await db.one("INSERT INTO questions (created_at, question, question_type, is_signup) VALUES ($1, $2, $3, $4) RETURNING *", [question.created_at, question.question, question.question_type, question.is_signup]);
        return newQuestion;
    } catch (error) {
        return error;
    };
  };
  
  const deleteQuestion = async (id) => {
  
    try {
        const removed = await db.one("DELETE FROM questions WHERE id=$1 RETURNING *", id);
        return removed;
    } catch (error) {
        return error;
    };
  };
  
  const updateQuestion = async (question, id) => {
  
    try {
        const updatedQuestion = await db.any(
        "UPDATE questions SET created_at=NOW(), question=$1, question_type=$2, is_signup=$3 WHERE id=$4 RETURNING *",
        [question.question, question.question_type, question.is_signup, id]
        );
        return updatedQuestion;
    } catch (error) {
        return error;
    };
  };
  

  module.exports = { getAllQuestions, getQuestion, createQuestion, deleteQuestion, updateQuestion }