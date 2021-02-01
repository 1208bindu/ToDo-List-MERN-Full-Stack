const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  job: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todos", TodosSchema);
