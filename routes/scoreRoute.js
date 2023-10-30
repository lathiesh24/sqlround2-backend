const express = require('express');
const router = express.Router();
const Score = require('../models/scoreModel');

router.post('/submit-score', async (req, res) => {
    const { teamName, score } = req.body;
    try {
        const newScore = new Score({ teamName, score });
        await newScore.save();
        res.status(201).send('Score saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/check-team', async (req, res) => {
    const { teamName } = req.query;

    try {
        const teamExists = await Score.exists({ teamName });

        if (teamExists === null) {
            res.status(500).json({ error: 'Error in database query' });
        } else {
            res.json({ exists: teamExists });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error});
    }
});


module.exports = router;
