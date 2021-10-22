const { getAllTodosDb, addTodoDb } = require('../data/todosDb');

const getAllTodos = (req, res) => {
    const allTodos = getAllTodosDb();
    res.send(allTodos);
}

const addTodo = (req, res) => {
    const addTodo = addTodoDb(req.body.todo);
    res.send(addTodo);
}

module.exports = { getAllTodos, addTodo }