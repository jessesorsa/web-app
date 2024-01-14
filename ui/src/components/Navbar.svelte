<script>
    import * as Api from "../http-actions/userManagement";
    import { userAccessStore } from "../stores/store.svelte";

    const userStore = userAccessStore();

    const Logout = () => {
        const user = userStore.active_user;
        Api.logOut(user);
    };
</script>

<header class="navbar bg-base-100 drop-shadow">
    <div class="flex-1 text-xl font-bold ml-6 mr-20">TWODO</div>
    <nav class="flex-none">
        <ul class="menu menu-horizontal px-1 items-center">
            <li><a href="/">Sign up</a></li>
            <li><a href="/login">Login</a></li>
            <li>
                <div class="items-center">
                    <a href="/" class="btn" on:click={Logout}>Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</header>
