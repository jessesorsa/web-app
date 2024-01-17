<script>
    import Todos from "../../components/Todos.svelte";
    import AddTodo from "../../components/AddTodo.svelte";
    import DefaultPage from "../../components/DefaultPage.svelte";
    import { userAccessStore } from "../../stores/store.svelte.js";
    const userStore = userAccessStore();
    let user = userStore.active_user;
</script>

{#if user !== ""}
    <AddTodo />
    <Todos />
{:else}
    <DefaultPage />
{/if}
