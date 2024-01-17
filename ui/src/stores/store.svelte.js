let initial_user = "";
if (
  typeof window !== "undefined" &&
  localStorage.hasOwnProperty("user")
) {
  initial_user = localStorage.getItem("user");
}

let initial_todos = [];
if (
  typeof window !== "undefined" &&
  localStorage.hasOwnProperty("todos")
) {
  initial_todos = JSON.parse(localStorage.getItem("todos"));
}

import { fetchTodos } from "../http-actions/todoManagement";
let active_user = $state(initial_user);
let todos = $state(initial_todos);

const initTodos = async () => {
  const todo_list = await fetchTodos();
  todos = todo_list;
  localStorage.setItem("todos", JSON.stringify(todos));
};

const userTodoStore = () => {
  return {
    get list() {
      console.log("todos in userTodoStore")
      console.log(todos);
      return todos;
    },
    addTodo: (todo) => {
      todos = [...todos, todo];
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    deleteTodo: (todo) => {
      todos.forEach((item, index) => {
        if (item.todo === todo.todo) {
          todos.splice(index, 1);
        }
      });
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    clearTodos: () => {
      todos = [];
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
};

const userAccessStore = () => {
  return {
    get active_user() {
      console.log("active_user in userAccessStore")
      console.log(active_user);
      return active_user;
    },
    clearUser: () => {
      active_user = "";
      localStorage.setItem("user", active_user);
    },
    addUser: (user) => {
      active_user = user.email;
      localStorage.setItem("user", active_user);
    },
  };
};


export { userAccessStore, userTodoStore, initTodos };
