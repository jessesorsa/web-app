<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<main class="container mx-auto">
    <slot />
</main>

<Footer />
