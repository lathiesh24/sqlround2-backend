const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel');


router.post('/', async (req, res) => {
    try {
        const { teamName, email, phoneNumber } = req.body;
        const team = new Team({ teamName, email, phoneNumber });
        await team.save();
        res.status(201).json({ message: 'Team data saved successfully' });
    } catch (error) {
        console.error('Error saving team data:', error);
        res.status(500).json({ error: error });
    }
});

module.exports = router;
