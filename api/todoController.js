import * as todoService from "./todoService.js";
import * as userService from "./userService.js";

const createTodo = async (c) => {
    const body = await c.req.json();
    console.log("body in createTodo");
    console.log(body);
    const email = body.email;
    const todo = body.todo;
    const user = await userService.findUserByEmail(email);
    await todoService.createTodo(user.id, todo);
    return c.json(todo);
};

const deleteTodo = async (c) => {
    const body = await c.req.json();
    console.log("body in deleteTodo");
    const email = body.email;
    const todo = body.todo;
    const user = await userService.findUserByEmail(email);
    await todoService.deleteTodo(user.id, todo);
    return c.json(todo);
};

const showTodos = async (c) => {
    const body = await c.req.json();
    const email = body;
    const user = await userService.findUserByEmail(email);
    const list = await todoService.listTodos(user.id);
    return c.json(list);
};

export { createTodo, showTodos, deleteTodo };