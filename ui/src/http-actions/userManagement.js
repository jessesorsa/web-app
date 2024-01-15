// this fetches localhost/8000/auth/registration
// this done for 
import { userAccessStore } from "../stores/store.svelte";

const userStore = userAccessStore();

const signUp = async (user) => {
    console.log(JSON.stringify(user));

    const res = await fetch("http://localhost:8000/auth/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    });
    const data = await res.json();
    console.log(data.message);
    return data;
};

const loginIn = async (user) => {
    console.log(user);
    const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    });

    const data = await res.json();
    console.log(data);
    if (data.message === "login successful") {
        userStore.addUser(user);
    };
    return data;
};

const logOut = async (user) => {
    const res = await fetch("http://localhost:8000/auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    });


    const data = await res.json();
    console.log(data);
    if (data.message === "user signed out") {
        userStore.clearUser(user);
    };
    return data;
}

export { signUp, loginIn, logOut };