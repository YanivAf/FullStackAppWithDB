const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    host            : process.env.DB_HOST || 'localhost',
    user            : process.env.DB_USER || 'root',
    password        : process.env.DB_PASS,
    database        : 'todos_db'
});

const query = async (queryText) => {
    return new Promise((resolve, reject) => {
        pool.query(queryText, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

const getAllTodosDb = async () => {
    const allTodos = await query(`SELECT * FROM todos`);
    return allTodos;
}

const addTodoDb = async (todoText) => {
    const allTodos = await query(`INSERT text INTO todos VALUES ${todoText}`);
    return allTodos;
}

module.exports = { query, getAllTodosDb, addTodoDb }