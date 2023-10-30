const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    teamName: String,
    score: Number,
});

module.exports = mongoose.model('Score', scoreSchema);
