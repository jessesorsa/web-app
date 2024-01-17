<script>
    import { userTodoStore } from "../stores/store.svelte.js";
    import AddTodo from "./AddTodo.svelte";
    import Card from "./Card.svelte";

    const todoStore = userTodoStore();
</script>

<AddTodo />
<div
    class="flex flex-wrap bg-neutral bg-base-100 shadow-xl mt-10 mr-5 ml-5 mb-10 rounded-3xl p-10"
>
    {#each todoStore.list as todo}
        <div class="flex mx-auto mr-5 ml-5 mt-5">
            <Card {todo} />
        </div>
    {/each}
</div>
