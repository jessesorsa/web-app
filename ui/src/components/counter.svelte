<script>
    import { useCountStore } from "../stores/counter.svelte.js";
    const counter = useCountStore();
</script>

<button on:click={counter.increment}>Increment count</button>
<p>{counter.count}</p>
