const express = require("express");
const router = express.Router();
const { getTodos, addTodos, deleteTodos } = require("../controllers/todos");

router.route("/").get(getTodos).post(addTodos);

router.route("/:id").delete(deleteTodos);

module.exports = router;
