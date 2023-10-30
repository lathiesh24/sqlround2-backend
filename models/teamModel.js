const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName: String,
    email: {
        type: String,
        unique: true, 
    },
    phoneNumber: {
        type: String,
        unique: true,
    },
});

const Team = mongoose.model('Team', teamSchema);


module.exports = Team;
