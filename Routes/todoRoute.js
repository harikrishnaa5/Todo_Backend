const express = require("express");
const {
  addTodo,
  allTodo,
  deleteTodo,
} = require("../Controllers/todoController");

const router = express.Router();

router.post("/add", addTodo);
router.get("/alltodo", allTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
