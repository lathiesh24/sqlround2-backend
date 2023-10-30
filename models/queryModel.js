const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  teamName: String,
  answers: [
    {
      questionNumber: String,
      sqlAnswer: String,
    },
  ],
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
