import * as scrypt from "https://deno.land/x/scrypt@v4.2.1/mod.ts";
import * as userService from "./userService.js";
import * as sessionService from "./sessionService.js";


const loginUser = async (c) => {
    const body = await c.req.json();
    console.log(body);

    const user = await userService.findUserByEmail(body.email);
    if (!user) {
        return c.json({ message: "No user with the email exists." });
    }

    const passwordsMatch = scrypt.verify(body.password, user.password_hash);

    if (!passwordsMatch) {
        return c.json({ message: "Incorrect password." });
    }

    await sessionService.createSession(c, user);

    return c.json({ message: "login successful" });
};

const registerUser = async (c) => {

    const body = await c.req.json();
    console.log(body);
    if (body.password !== body.verification) {
        return c.json({ message: "The provided passwords did not match." });
    }

    const existingUser = await userService.findUserByEmail(body.email);
    console.log();
    if (existingUser.email === body.email) {
        return c.json({ message: "A user with the email already exists." });
    }
    console.log("adding user")
    const user = {
        email: body.email,
        passwordHash: scrypt.hash(body.password),
    };

    await userService.createUser(user);

    return c.json({ message: "user signed up" });
};

const logoutUser = async (c) => {
    await sessionService.deleteSession(c);
    return c.json({ message: "user signed out" });
};

export { registerUser, loginUser, logoutUser };