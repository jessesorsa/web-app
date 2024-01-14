<script>
    let todo = $state("");
    import * as Api from "../http-actions/todoManagement";
    const addTodo = () => {
        Api.addTodo(todo);
        todo = "";
    };
</script>

<div class="hero mt-10 mb-5">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Add todos.</h1>
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
