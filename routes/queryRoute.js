const express = require('express');
const router = express.Router();
const Query = require('../models/queryModel');

router.post('/query-answers', async (req, res) => {
  try {
    const { teamName, answers } = req.body;

    let existingResponse = await Query.findOne({ teamName });

    if (existingResponse) {
      existingResponse.answers = answers;
      existingResponse = await existingResponse.save();
      res.status(200).json(existingResponse);
    } else {
      const newQuery = new Query({
        teamName,
        answers,
      });
      const savedQuery = await newQuery.save();
      res.status(201).json(savedQuery);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
