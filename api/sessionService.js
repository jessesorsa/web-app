import {
    deleteCookie,
    getSignedCookie,
    setSignedCookie,
} from "./deps.js";

const secret = "secret";
const WEEK_IN_MILLISECONDS = 604800000;

const getUserFromSession = async (c) => {
    console.log("trying to get user from session");
    const sessionId = await getSignedCookie(c, secret, "sessionId");
    if (!sessionId) {
        return null;
    }

    console.log(sessionId);

    const kv = await Deno.openKv();
    const user = await kv.get(["sessions", sessionId]);
    const foundUser = user?.value ?? null;
    if (!foundUser) {
        return null;
    }

    await kv.set(["sessions", sessionId], foundUser, {
        expireIn: WEEK_IN_MILLISECONDS,
    });

    return foundUser;
};

const createSession = async (c, user) => {

    console.log("creating a session for the user");

    const sessionId = crypto.randomUUID();
    await setSignedCookie(c, "sessionId", sessionId, secret, {
        path: "/",
    });
    console.log("checking cookie");
    console.log(await getSignedCookie(c, secret, "sessionId"));

    console.log(user, sessionId)
    const kv = await Deno.openKv();
    await kv.set(["sessions", sessionId], user, {
        expireIn: WEEK_IN_MILLISECONDS,
    });
    console.log("getting user from session right after assigning it");
    console.log(await getUserFromSession(c));

};

const deleteSession = async (c) => {
    const sessionId = await getSignedCookie(c, secret, "sessionId");
    if (!sessionId) {
        return;
    };

    deleteCookie(c, "sessionId", {
        path: "/",
    });

    const kv = await Deno.openKv();
    await kv.delete(["sessions", sessionId]);

};

export { createSession, getUserFromSession, deleteSession };