<script>
    import Todos from "../../components/Todos.svelte";
    import DefaultPage from "../../components/DefaultPage.svelte";
    import { userAccessStore } from "../../stores/store.svelte.js";
    import { onMount } from "svelte";
    const userStore = userAccessStore();
    let authenticated = $state();

    onMount(() => {
        if (userStore.active_user !== "") {
            authenticated = true;
        }
    });
</script>

{#if authenticated === true}
    <Todos />
{:else}
    <DefaultPage />
{/if}
