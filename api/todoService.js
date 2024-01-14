import { sql } from "./database.js";

const createTodo = async (user_id, todo) => {
    await sql`INSERT INTO todos (todo, user_id) VALUES (${todo}, ${user_id})`;
};

const updateTodo = async (user_id, id, todo) => {
    await sql`UPDATE todos SET todo = ${todo.todo} WHERE id = ${id} AND user_id = ${user_id}`;
};

const deleteTodo = async (user_id, todo) => {
    await sql`DELETE FROM todos WHERE todo = ${todo} AND user_id = ${user_id};`;
};

const listTodos = async (user_id) => {
    return await sql`SELECT todo FROM todos where user_id = ${user_id}`;
};

const getTodo = async (user_id, id) => {
    const rows = await sql`SELECT * FROM todos WHERE user_id = ${user_id} AND id = ${id}`;
    return rows?.[0] ?? {};
};

export { createTodo, getTodo, listTodos, updateTodo, deleteTodo };