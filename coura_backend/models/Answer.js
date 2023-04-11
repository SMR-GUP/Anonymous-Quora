const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  answer: { type: String, required: true },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  ansUserId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Answers", AnswerSchema);
