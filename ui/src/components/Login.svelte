<script>
    import * as Api from "../http-actions/userManagement";

    let user = $state({
        email: "",
        password: "",
    });

    let log = $state("");
    const Login = async () => {
        const res = await Api.loginIn(user);
        console.log(res);
        if (res.message === "No user with the email exists.") {
            log = "No user with the email exists.";
        } else if (res.message === "Incorrect password.") {
            log = "Incorrect password.";
        } else if (res.message === "login successful") {
            log = "Login successful";
        }

        console.log("log:");
        console.log(log);
    };
</script>

<div class="hero mb-40 mt-40">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Login.</h1>
            {#if log !== "Login successful"}
                <div class="flex items-center mt-5">
                    <label for="text" class="mr-2">Email:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="email@mail.com"
                        class="input input-bordered w-full max-w-xs"
                        bind:value={user.email}
                    />
                </div>
                <div class="flex items-center mt-5">
                    <label for="password" class="mr-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="input input-bordered w-full max-w-xs"
                        bind:value={user.password}
                    />
                </div>
            {/if}
            {#if log === "Login successful"}
                <div class="mt-5">
                    <p>Login successful!</p>
                </div>
                <a class="btn mt-5" href="/todos">Move to TODOS page.</a>
            {:else if log === "No user with the email exists."}
                <button class="btn btn-active btn-neutral mt-5" on:click={Login}
                    >Login</button
                >
                <p>Invalid email.</p>
            {:else if log === "Incorrect password."}
                <button class="btn btn-active btn-neutral mt-5" on:click={Login}
                    >Login</button
                >
                <p>Incorrect password.</p>
            {:else}
                <button class="btn btn-active btn-neutral mt-5" on:click={Login}
                    >Login</button
                >
            {/if}
        </div>
    </div>
</div>
