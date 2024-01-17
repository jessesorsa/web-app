import { Hono } from "./deps.js";
import { cors } from "./deps.js";
import * as todoController from "./todoController.js";
import * as authController from "./authController.js";

const app = new Hono();

app.use("/*", cors());

app.post("/auth/login", authController.loginUser);
app.post("/auth/registration", authController.registerUser);
app.post("/auth/logout", authController.logoutUser);

app.post("/todos/get", todoController.showTodos);
app.post("/todos", todoController.createTodo);
app.post("/todos/delete", todoController.deleteTodo);

export default app;