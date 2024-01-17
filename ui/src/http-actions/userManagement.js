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
    return data;
};

export { signUp, loginIn };