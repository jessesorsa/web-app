<script>
    import * as Api from "../http-actions/todoManagement";
    let { todo } = $props();

    const Delete = () => {
        Api.deleteTodo(todo.todo);
    };
</script>

<div class="card w-70 bg-base-100 shadow-xl mt-5 mb-5">
    <div class="card-body">
        <h2 class="card-title">{todo.todo}</h2>
        <div class="card-actions justify-center">
            <button
                class="btn btn-primary items-center mt-5 sm:btn-sm md:btn-md lg:btn-lg"
                on:click={Delete}>Delete todo</button
            >
        </div>
    </div>
</div>
