import { fetchTodos } from "../http-actions/todoManagement";
let active_user = $state("");
let todos = $state([]);

const initTodos = async () => {
  console.log("initial todos");
  const todo_list = await fetchTodos();
  todos = todo_list;
  console.log("iniatilise");
  console.log(todos);
};

const userTodoStore = () => {
  return {
    get list() {
      console.log("this is the todos");
      console.log(todos);
      return todos;
    },
    addTodo: (todo) => {
      console.log("currently adding the todo;");
      console.log(todo);
      console.log("to list todos.todo;");
      console.log(todos.todo);
      todos = [...todos, todo];
    },
    deleteTodo: (todo) => {
      console.log("todo in deletee todo");
      console.log(todo);
      console.log("todos list in delete");
      console.log(todos);

      todos.forEach((item, index) => {
        if (item.todo === todo.todo) {
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
