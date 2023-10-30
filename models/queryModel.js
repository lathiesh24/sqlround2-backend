const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionNumber: String,
  sqlAnswer: String,
});

const querySchema = new mongoose.Schema({
  teamName: String,
  answers: [answerSchema],
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
