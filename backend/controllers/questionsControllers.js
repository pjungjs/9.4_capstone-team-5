const express = require('express');
const questions = express.Router();

const { getAllQuestions, getQuestion, createQuestion, deleteQuestion, updateQuestion } = require('../queries/questionsQueries.js');


questions.get("/", async (req, res) => {
    try {
    const theQuestions = await getAllQuestions();
    res.json(theQuestions)
    } catch (error) {
      res.json(error)
    }
  });

questions.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const theQuestion = await getQuestion(id);
    res.json(theQuestion)
    } catch (error) {
      res.json(error)
    }
  });

  questions.post('/', async (req, res) => {
    const newQuestion = req.body;
    try {
        const addedQuestion = await createQuestion(newQuestion);
        res.status(200).json(addedQuestion)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});
   
questions.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const removed = await deleteQuestion(id);
    if(removed) {
        res.status(200).json(removed);
    } else {
        res.status(404).json({ error: "Sorry! Question was not found" });
    }
});

questions.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedQuestion = await updateQuestion(req.body, id);
        res.status(200).json(updatedQuestion);
    } catch (error){
        res.status(400).json({ error: "Sorry! Question could not be updated" });
    }
});



module.exports = questions;