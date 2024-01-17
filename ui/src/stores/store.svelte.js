let initial_user = "";
if (
  typeof window !== "undefined" &&
  localStorage.hasOwnProperty("user")
) {
  initial_user = parseInt(localStorage.getItem("user"));
}

let initial_todos = [];
if (
  typeof window !== "undefined" &&
  localStorage.hasOwnProperty("todos")
) {
  initial_todos = parseInt(localStorage.getItem("todos"));
}

import { fetchTodos } from "../http-actions/todoManagement";
let active_user = $state(initial_user);
let todos = $state(initial_todos);

const initTodos = async () => {
  const todo_list = await fetchTodos();
  todos = todo_list;
  localStorage.setItem("todos", todos);
};

const userTodoStore = () => {
  return {
    get list() {
      return todos;
    },
    addTodo: (todo) => {
      todos = [...todos, todo];
      localStorage.setItem("todos", todos);
    },
    deleteTodo: (todo) => {
      todos.forEach((item, index) => {
        if (item.todo === todo.todo) {
          todos.splice(index, 1);
        }
      });
      localStorage.setItem("todos", todos);
    },
    clearTodos: () => {
      todos = [];
      localStorage.setItem("todos", todos);
    }
  };
};

const userAccessStore = () => {
  return {
    get active_user() {
      return active_user;
    },
    clearUser: () => {
      active_user = "";
      localStorage.setItem("user", active_user);
    },
    addUser: (user) => {
      console.log(user);
      active_user = user.email;
      localStorage.setItem("user", active_user);
    },
  };
};


export { userAccessStore, userTodoStore, initTodos };
