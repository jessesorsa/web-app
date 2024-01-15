import * as sessionService from "./sessionService.js";

const accessControlMiddleware = async (c, next) => {

    console.log("asking access");
    console.log(c.user);
    const authenticated = c.user;

    if (!authenticated) {
        return c.json({ message: "You have not authenticated!" });
    }

    await next();
};

const addUserToContextMiddleware = async (c, next) => {
    console.log("adding user to context");
    c.user = await sessionService.getUserFromSession(c);
    console.log("c.user");
    console.log(c.user);
    await next();
};

export { accessControlMiddleware, addUserToContextMiddleware };