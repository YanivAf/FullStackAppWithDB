const express = require('express')
const router = express.Router();
const { query } = require('../data/todosDb')
const { getAllTodos, addTodo } = require('../controllers/todosController');

query(`CREATE TABLE IF NOT EXISTS todos (
    id INT(200) AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL,
    created_date DATE DEFAULT (CURRENT_DATE),
    PRIMARY KEY (id)
)`);

router.get('/', getAllTodos);

router.post('/', addTodo);

module.exports = router;