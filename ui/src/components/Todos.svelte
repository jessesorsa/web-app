<script>
    import { userTodoStore } from "../stores/store.svelte";
    import AddTodo from "./AddTodo.svelte";
    import Card from "./Card.svelte";

    import { initTodos } from "../stores/store.svelte.js";

    const loadTodos = async () => {
        await initTodos();
    };

    loadTodos();
    const todoStore = userTodoStore();
    console.log("wow what a list:!!!!!!!");
    console.log(todoStore.list);
</script>

{#await loadTodos()}
    <p>Loading...</p>
{:then}
    <AddTodo />
    <div
        class="flex flex-wrap bg-neutral bg-base-100 shadow-xl mt-10 mr-5 ml-5 mb-10 rounded-3xl p-10"
    >
        {#each todoStore.list.body as todo}
            <div class="flex mx-auto mr-5 ml-5 mt-5">
                <Card {todo} />
            </div>
        {/each}
    </div>
{/await}
