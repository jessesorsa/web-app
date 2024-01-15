<script>
    import Todos from "../../components/Todos.svelte";
    import { userAccessStore } from "../../stores/store.svelte.js";
    import { onMount } from "svelte";
    const userStore = userAccessStore();

    let authenticated = $state();
    onMount(() => {
        if (userStore.active_user !== "") {
            authenticated = true;
        }
    });
    //let authenticated = $state();
    /*
    const auth = () => {
        if (userStore.active_user) {
            authenticated = true;
        }
    };
    auth();
    */
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
