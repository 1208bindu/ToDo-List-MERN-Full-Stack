const Todos = require("../models/Todos");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todos.find();

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTodos = async (req, res, next) => {
  try {
    const { job } = req.body;

    const todos = await Todos.create(req.body);

    return res.status(201).json({
      success: true,
      data: todos,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTodos = async (req, res, next) => {
  try {
    const todos = await Todos.findById(req.params.id);

    if (!todos) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await todos.deleteOne();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
