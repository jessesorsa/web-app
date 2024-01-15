<script>
    import Todos from "../../components/Todos.svelte";
    import { userAccessStore } from "../../stores/store.svelte.js";
    const userStore = userAccessStore();

    let authenticated = $state(false);

    const auth = () => {
        if (userStore.active_user) {
            authenticated = true;
        }
    };
    auth();
</script>

<!--
{#await auth()}
    <p>Loading...</p>
{:then}
-->
{#if authenticated === true}
    <Todos />
{:else}
    <p>Not authenticated.</p>
{/if}
<!--
{/await}
-->
