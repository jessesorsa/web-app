import { Eta } from "./deps.js";
import * as todoService from "./todoService.js";
import * as userService from "./userService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const createTodo = async (c) => {
    const body = await c.req.json();
    const email = body.email;
    const todo = body.todo;
    const user = await userService.findUserByEmail(email);
    console.log("This is the user_id:")
    console.log(user.id);

    await todoService.createTodo(user.id, todo);
    return c.json({ message: "todo created" });
};

const showTodos = async (c) => {
    const body = await c.req.json();
    const email = body;
    const user = await userService.findUserByEmail(email);
    const list = await todoService.listTodos(user.id);
    return c.json({ body: list });

};

const deleteTodo = async (c) => {
    const body = await c.req.json();
    const email = body;
    const todo = body.todo;
    const user = await userService.findUserByEmail(email);
    await todoService.deleteTodo(user.id, todo);
    return c.json({ message: "deleted" });
};

export { createTodo, showTodos, deleteTodo };