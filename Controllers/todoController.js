const todoModel = require("../Models/todoModel");

exports.addTodo = async (req, res) => {
  const { todo } = req.body;
  try {
    const newTodo = new todoModel({ todo: todo });
    newTodo.save();
    res.status(200).json("new Todo saved");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.allTodo = async (req, res) => {
  try {
    const allTodo = await todoModel.find();
    res.status(200).json({ allTodo: allTodo });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    await todoModel.findByIdAndDelete({ id: id });
    res.status(200).json("todo deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
