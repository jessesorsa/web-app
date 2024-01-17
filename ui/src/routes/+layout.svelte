<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
    import { userAccessStore } from "../stores/store.svelte.js";
    import { onMount } from "svelte";

    const userStore = userAccessStore();

    onMount(() => {
        let user = userStore.active_user;
        console.log("active user");
        console.log(user);
    });
</script>

<Navbar />
<main class="container mx-auto">
    <slot />
</main>

<Footer />
