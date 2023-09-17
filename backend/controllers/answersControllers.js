const express = require('express');
const answers = express.Router({ mergeParams: true });

const { getAllAnswers, getUserAnswers } = require('../queries/answersQueries.js');

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


module.exports = answers;