<script>
    import { userAccessStore } from "../stores/store.svelte";
    import { userTodoStore } from "../stores/store.svelte";

    const userStore = userAccessStore();
    const todoStore = userTodoStore();

    const Logout = () => {
        const user = userStore.active_user;
        userStore.clearUser(user);
        todoStore.clearTodos();
    };
</script>

<header class="navbar bg-base-100 drop-shadow">
    <div class="flex-1 text-xl font-bold ml-6 mr-20">TWODO</div>
    <nav class="flex-none">
        <ul class="menu menu-horizontal px-1 items-center">
            <li><a href="/todos">Todos</a></li>
            <li><a href="/">Sign up</a></li>
            <li><a href="/login">Login</a></li>
            <li>
                <div class="items-center px-1">
                    <a href="/" class="btn btn-outline" on:click={Logout}
                        >Logout</a
                    >
                </div>
            </li>
        </ul>
    </nav>
</header>
