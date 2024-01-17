<script>
    let todo = $state("");
    import * as Api from "../http-actions/todoManagement";
    import { userTodoStore } from "../stores/store.svelte.js";
    const todoStore = userTodoStore();

    const addTodo = () => {
        Api.addTodo(todo);
        let addTodoObject = {
            todo: todo,
        };
        todoStore.addTodo(addTodoObject);
        todo = "";
    };
</script>

<div class="hero mt-10 mb-5">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-3xl font-bold">Add todos.</h1>
            <div class="flex items-center mt-5">
                <label for="text" class="mr-2">Description:</label>
                <input
                    type="text"
                    id="todo"
                    placeholder="Write your todo here!"
                    class="input input-bordered w-full max-w-xs"
                    bind:value={todo}
                />
            </div>
            <a
                href="/todos"
                class="button btn btn-active btn-neutral mt-5"
                on:click={addTodo}>Add Todo</a
            >
        </div>
    </div>
</div>
