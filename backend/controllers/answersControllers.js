const express = require('express');
const answers = express.Router({ mergeParams: true });

const { getAllAnswers, getUserAnswers, createAnswersTable, updateAnswersTable } = require('../queries/answersQueries.js');

answers.get("/", async (req, res) => {
    try {
    const theAnswers = await getAllAnswers();
    res.json(theAnswers)
    } catch (error) {
      res.json(error)
    }
  });

  answers.get("/:userAuthId", async (req, res) => {
    const { userAuthId } = req.params;
    try {
    const theAnswers = await getUserAnswers(userAuthId);
    res.json(theAnswers)
    } catch (error) {
      res.json(error)
    }
  });

  answers.post("/:userAuthId", async (req, res) => {
    const { userAuthId } = req.params;
    const answersTable = await createAnswersTable(userAuthId);
    if (answersTable) {
      res.status(200).json(answersTable);
    } else {
      res.status(404).json({ error: "Answers Table not found" });
    }
  });

  answers.put("/:userAuthId", async (req, res) => {
    const { userAuthId } = req.params;
    const updateAnswers = req.body;
  
    try {
      const updatedAnswers = await updateAnswersTable(updateAnswers, userAuthId);
      res.status(200).json(updatedAnswers);
    } catch (error) {
      console.error("Database update error:", error);
      res.status(404).json({ error: "Answers table not updated" });
    }
  });
  



module.exports = answers;