import { fetchTodos } from "../http-actions/todoManagement";
let active_user = $state("");
let todos = $state([]);

const initTodos = async () => {
  console.log("initial todos");
  //if (todos.length > 0) return;
  const todo_list = await fetchTodos();
  todos = todo_list;
  console.log("iniatilise");
  console.log(todos);
};

const userTodoStore = () => {
  return {
    get list() {
      return todos;
    },
    addTodo: (todo) => {
      console.log("in the addTodo");
      console.log("this the todo to be added:");
      console.log(todo);
      console.log("this the original todo list:");
      console.log(todos.body);
      todos = [...todos.body, todo];
    },
    deleteTodo: (todo) => {
      todos.forEach((item, index) => {
        if (item.id === todo.id) {
          todos.splice(index, 1);
        }
      });

    },
  };
};

const userAccessStore = () => {
  return {
    get active_user() {
      return active_user;
    },
    clearUser: () => {
      active_user = "";
    },
    addUser: (user) => {
      active_user = user.email;
    },
  };
};


export { userAccessStore, userTodoStore, initTodos };
