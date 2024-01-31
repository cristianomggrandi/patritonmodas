import * as jose from "jose"
import { cookies } from "next/headers"

const secret = new TextEncoder().encode(process.env.AUTH_SECRET)

async function openSessionToken(token: string) {
    const { payload } = await jose.jwtVerify(token, secret)

    return payload
}

async function createSessionToken(payload = {}) {
    const session = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1d")
        .sign(secret)

    const { exp, role } = await openSessionToken(session)

    cookies().set("session", session, {
        expires: (exp as number) * 1000,
        path: "/",
        httpOnly: true,
    })
}

async function isSessionValid() {
    const sessionCookie = cookies().get("session")

    if (sessionCookie) {
        const { value } = sessionCookie
        const { exp } = await openSessionToken(value)
        const currentDate = new Date().getTime()

        return (exp as number) * 1000 > currentDate
    }

    return false
}

async function getUserDetails() {
    const sessionCookie = cookies().get("session")

    if (sessionCookie) {
        const { value } = sessionCookie
        const { sub, name, exp } = await openSessionToken(value)
        const currentDate = new Date().getTime()

        const isValid = (exp as number) * 1000 > currentDate

        if (isValid) return { id: sub, name }
        else return null
    }

    return null
}

function destroySession() {
    cookies().delete("session")
    // TODO: Redirect?
}

const AuthService = {
    openSessionToken,
    createSessionToken,
    getUserDetails,
    destroySession,
    isSessionValid,
}

export default AuthService
