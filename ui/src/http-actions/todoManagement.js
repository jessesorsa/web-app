import { userTodoStore } from "../stores/store.svelte.js";
import { userAccessStore } from "../stores/store.svelte.js";

const addTodo = async (todo) => {
    const userStore = userAccessStore();
    const todoStore = userTodoStore();

    const email = userStore.active_user;


    const body = {
        email: email,
        todo: todo,
    };

    console.log(body);

    const res = await fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)

    });
    const data = await res.json();
    console.log(data.message);
    if (data.message === "todo created") {
        todoStore.addTodo(todo);
    };
    return data;
};

const deleteTodo = async (todo) => {
    const userStore = userAccessStore();
    const todoStore = userTodoStore();

    const email = userStore.active_user;


    const body = {
        email: email,
        todo: todo,
    };

    console.log("boooody");
    console.log(body);

    const res = await fetch("http://localhost:8000/todos/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)

    });
    const data = await res.json();
    console.log(data.message);
    if (data.message === "deleted") {
        todoStore.deleteTodo(todo);
    };
    return data;
};

const fetchTodos = async () => {
    const userStore = userAccessStore();
    const email = userStore.active_user;

    const res = await fetch("http://localhost:8000/todos/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)

    });
    const data = await res.json();
    console.log(data);
    return data;
}

export { addTodo, fetchTodos, deleteTodo };