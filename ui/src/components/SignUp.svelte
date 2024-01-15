<script>
    import * as Api from "../http-actions/userManagement";
    let user = $state({
        email: "",
        password: "",
        verification: "",
    });

    let signed = $state("");
    const Sign = async () => {
        const res = await Api.signUp(user);
        console.log(res);
        if (res.message === "The provided passwords did not match.") {
            signed = "The provided passwords did not match.";
        } else if (res.message === "user signed up") {
            signed = "Sign up successful!";
        } else {
            signed = "Error";
        }

        console.log("signed:");
        console.log(signed);

        user.email = "";
        user.password = "";
        user.verification = "";
    };
</script>

<div class="card w-70 bg-base-100 w-300 mb-20 mt-20 shadow-xl rounded-3xl">
    <div class="hero-content text-center mt-10 mb-10">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Sign up!</h1>
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
            <div class="flex items-center mt-5">
                <label for="verification" class="mr-2">Verify password:</label>
                <input
                    type="password"
                    id="verification"
                    placeholder="Password again"
                    class="input input-bordered w-full max-w-xs"
                    bind:value={user.verification}
                />
            </div>
            <button class="btn btn-active btn-neutral mt-5" on:click={Sign}
                >Sign up</button
            >
            {#if signed === "Sign up successful!"}
                <div class="mt-5">
                    <p>Sign up successful!</p>
                </div>
                <a class="btn mt-5" href="/login">Move to login</a>
            {:else if signed === "The provided passwords did not match."}
                <p>The provided passwords did not match.</p>
            {:else if signed === "Error"}
                <p>Email already in use</p>
            {/if}
        </div>
    </div>
</div>
