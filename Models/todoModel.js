const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: {
    type: "string",
    required: true,
  },
});

const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;